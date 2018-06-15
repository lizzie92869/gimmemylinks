class ListSerializer < ActiveModel::Serializer
  attributes :id, :name, :color, :user_id
  has_many :links
  belongs_to :user
end
