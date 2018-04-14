class LinksController < ApplicationController

	def index
	end

	def new
		@list = List.find(params[:list_id])
		@link = Link.new
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

end