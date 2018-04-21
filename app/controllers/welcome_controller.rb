class WelcomeController < ApplicationController

	def home
		if !user_signed_in?
			redirect_to new_user_registration_path
		end
			@new_list = List.new
	end
	
end