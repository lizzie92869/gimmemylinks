class ListsController < ApplicationController

	def show
		@links = Link.all
	end

end