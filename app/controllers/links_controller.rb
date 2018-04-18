class LinksController < ApplicationController



	def index
	end

	def new
		@new_list = List.create
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
		@new_list = List.create
		
		@link = current_user.links.where(id: params[:id]).first
		
	end

	def destroy
		@link = Link.find(params[:id])
		@list = List.find(params[:id])
		@link.destroy
		redirect_to list_path(@list) 
	end

	private

	def link_params
		params.require(:link).permit(:name, :url, :priority, :user_id, :list_id)
	end

end