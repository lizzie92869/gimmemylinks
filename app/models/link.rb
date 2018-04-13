require 'uri'

class Link < ActiveRecord::Base

	has_many :lists
	has_many :users, through: :lists

	validates :url, http_url: true
	#to display the user's high priority links on his home page
	scope :priority, -> { where(priority: "high") }

end