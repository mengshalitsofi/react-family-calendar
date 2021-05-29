class Event < ApplicationRecord    
    validates :day, presence: true
    validates :month, presence: true
    validates :year, presence: true
    validates :title, presence: true
end