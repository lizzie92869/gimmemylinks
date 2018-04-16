class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def random_color
		color_array = ["#CCFF38", "#CCFF38", "#604560", "#E4E0D5", "#51CDA7", "#BCB7B3", "#FF3333", "#F9FFFC"]
		# "#FFCC99"
		index = (1 + rand(color_array.count))
		color_array[index]
	end
	
end
