require 'uri'

class Link < ActiveRecord::Base

	belongs_to :list
	

	validates :url, http_url: true
	validates :name, presence: true
	
	# validate :list_unique_name
	#to display the user's links by priority on his home page
	scope :high_priority, -> {order("priority DESC") }
	scope :recent, -> {order("created_at DESC")}
	scope :old, -> {order("created_at ASC")}

	def hr_priority	
		i_priority = self.priority
		case i_priority
		when i_priority = 3
			return "low"
		when i_priority = 2
			return "medium"
		when i_priority = 1
			return "high"
		end
	end

end