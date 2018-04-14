class ListsController < ApplicationController

	def show
		list = List.find(params[:id])
		@links = list.links
		# @lists = current_user.lists
	end

end