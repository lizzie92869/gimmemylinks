class List < ActiveRecord::Base
	
	has_many :links
	has_many :users, through: :links
	validates :name, presence: true


	# validates :name, uniqueness: { scope: :user_id }
end