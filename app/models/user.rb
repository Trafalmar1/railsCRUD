class User < ApplicationRecord
    include Visible
    has_many :profiles, dependent: :destroy

    validates :username, presence: true
    validates :password, presence: true
    validates :email, presence: true

    VALID_ROLES = ['user','admin']
    validates :role, presence: true, inclusion:{in:VALID_ROLES}
end
