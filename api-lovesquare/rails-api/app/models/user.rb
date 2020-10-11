class User < ApplicationRecord
    has_many :posts
    has_many :comments, :through => :posts
    has_one :

    has_secure_password

    validates :email, uniqueness: true, presence: true
    validates :password, length: { in: 6..18 }

end
