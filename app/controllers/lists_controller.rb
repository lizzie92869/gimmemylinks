class ListsController < ApplicationController

	def show
		@links = current_user.links
		@lists = current_user.lists
	end

end