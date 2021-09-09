class Profile < ApplicationRecord
  belongs_to :user, counter_cache: true

  validates :name, presence: true
  validates :city, presence: true
  VALID_GENDERS= ['male','female']
  validates :gender, presence: true, inclusion:{in:VALID_GENDERS}
  validates :birthday, presence:true
  
end
