class ListsController < ApplicationController

	def show
		@list = List.find(params[:id])
		@links = @list.links
	end

end