class LinksController < ApplicationController
include ApplicationHelper
before_action :find_link, :only => [:show, :update, :destroy]

	def index
	end

	def new
		@new_list = List.new
		@list = List.find(params[:list_id])
		@link = Link.new
	end

	def create
		@list = List.find(params[:list_id])	
		@link = Link.new(link_params)
		if @link.save
		else
		flash[:alert]="name can't be blank / URL must be valid"
		end
		redirect_to list_path(@list)
	end

	def show
		@new_list = List.new
		@list = @link.list
	end

	def update
		@list = params[:list_id]
		if @link.update(link_params)
			flash[:alert]="link updated succesfully"
			redirect_to list_path(@list)
		else
			flash[:alert]="name can't be blank / URL must be valid"
			redirect_to list_link_path(@list, @link)
		end
	end

	def destroy
		@list = @link.list
		@link.destroy
		flash[:alert]="link deleted succesfully"
		redirect_to list_path(@list)
	end

	private

	def link_params
		params.require(:link).permit(:name, :url, :priority, :user_id, :list_id)
	end

	def find_link
		@link = Link.find(params[:id])
	end	

end