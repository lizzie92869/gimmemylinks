class User < ApplicationRecord	
  has_many :links
  has_many :lists, through: :links
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
