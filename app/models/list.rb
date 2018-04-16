class List < ActiveRecord::Base
	
	has_many :links
	has_many :users, through: :links
	validates :name, presence: true


	# validates :name, uniqueness: { scope: :user_id, message: "You already have a list with this name." }, if: :user_id?
end