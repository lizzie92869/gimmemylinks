require 'uri'

class Link < ActiveRecord::Base

	belongs_to :list
	belongs_to :user

	validates :url, http_url: true
	validates :name, presence: true
	#to display the user's links by priority on his home page
	scope :high_priority, -> {order("created_at DESC") }
	scope :recent, -> {order("created_at DESC")}
	scope :old, -> {order("created_at ASC")}



	def show
		@link = Link.find(params[:id])
	end

end