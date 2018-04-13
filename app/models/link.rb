require 'uri'

class Link < ActiveRecord::Base
	validates :url, http_url: true

	#to display the user's high priority links on his home page
	scope :priority, -> { where(priority: "high") }

end