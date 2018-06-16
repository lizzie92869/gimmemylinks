require 'uri'

class Link < ActiveRecord::Base

	belongs_to :list
	

	validates :url, http_url: true
	validates :name, presence: true
	#to display the user's links by priority on his home page
	# scope :high_priority, -> {order("priority DESC") }
	# scope :recent, -> {order("created_at DESC")}
	# scope :old, -> {order("created_at ASC")}

end