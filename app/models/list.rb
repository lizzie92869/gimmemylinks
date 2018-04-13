class List < ActiveRecord::Base
	
	belongs_to :link
	belongs_to :user

	validates :name, uniqueness: { scope: :user_id, message: "You already have a list with this name." }, if: :user_id?
end