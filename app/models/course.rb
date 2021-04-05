class Course < ApplicationRecord
    validates :name, presence: true
    validates :par, presence: true
    validates :course_rating, presence: true
    validates :slope_rating, presence: true

    validates_uniqueness_of :name

    has_many :rounds
end
