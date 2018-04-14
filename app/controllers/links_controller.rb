class LinksController < ApplicationController

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