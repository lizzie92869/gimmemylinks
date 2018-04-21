class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  

  # def authorized?
  # 	if current_user.logged_in? && user.authorized?
  # 	else
  # 		flash[:alert]="Sorry, you can't access this page."
  # 		redirect_to root_path
  # 	end
  # end



  def random_color
		color_array = ["#CCFF38", "#604560", "#E4E0D5", "#51CDA7", "#BCB7B3", "#FF3333", "#F9FFFC"]
		index = (rand(color_array.count-1))
		color_array[index]
	end
	

end