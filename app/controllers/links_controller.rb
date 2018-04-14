class LinksController < ApplicationController

	def index
	end

	def new
		@list = List.find(params[:list_id])
		@link = Link.new
	end

	def create
		@list = List.find(params[:list_id])
		@link = Link.create(link_params)
		redirect_to list_path(@list)
	end

	def show
		@link = Link.find(params[:id])
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