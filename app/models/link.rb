require 'uri'

class Link < ActiveRecord::Base

	belongs_to :list
	belongs_to :user

	validates :url, http_url: true
	#to display the user's high priority links on his home page
	scope :priority, -> { where(priority: "high") }

	def show
		@link = Link.find(params[:id])
	end

end