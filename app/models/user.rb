class User < ApplicationRecord
    include Visible
    has_many :profiles, dependent: :destroy

    validates :username, presence: true
    validates :password, presence: true
    validates :email, presence: true
    validates :role, presence: true
end
