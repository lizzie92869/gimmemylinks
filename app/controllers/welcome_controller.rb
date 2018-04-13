class WelcomeController < ApplicationController

	def home
		@lists = List.all
	end
	
end