class LinksController < ApplicationController



	def index
	end

	def new
		@new_list = List.new
		@list = List.find(params[:list_id])
		@link = Link.new
	end

	def create
		@list = List.find(params[:list_id])	
		@link = Link.create(link_params)
		if @link.save
		else
		flash[:alert]="name can't be blank / URL must be valid"
		end
		redirect_to list_path(@list)
	end

	def show
		@new_list = List.new
	
		@link = Link.find(params[:id])
		
	end

	def destroy
		@link = Link.find(params[:id])
		@list = @link.list
		@link.destroy
		flash[:alert]="link deleted succesfully"
		redirect_to list_path(@list)
	end

	private

	def link_params
		params.require(:link).permit(:name, :url, :priority, :user_id, :list_id)
	end

end