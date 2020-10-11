class User < ApplicationRecord
    has_many :posts
    has_many :comments, :through => :posts
    has_one :profile

    has_secure_password

    validates :email, uniqueness: true, presence: true
    validate :password

    # validate :password_digest ?????

    
    # , length: { in: 6..18 }

end
