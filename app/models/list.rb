class List < ActiveRecord::Base
	
	has_many :links
	
	validates :name, presence: true
	

	

end