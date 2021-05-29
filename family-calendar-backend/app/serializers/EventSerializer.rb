class EventSerializer
    include FastJsonapi::ObjectSerializer
    attributes :day, :month, :year, :title, :description, :id
end