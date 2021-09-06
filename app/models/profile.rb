class Profile < ApplicationRecord
  include Visible
  belongs_to :user

  validates :name, presence: true
  validates :birthday, presence: true
  validates :city, presence: true

  VALID_GENDERS = ['male','female']
  validates :gender, presence: true, inclusion:{in:VALID_GENDERS}
end
