class WelcomeController < ApplicationController

	def home
		@new_list = List.create
	end
	
end