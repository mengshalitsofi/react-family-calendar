class EventsController < ApplicationController

    def create
      event = Event.new(event_params)
      if event.save
        render json: EventSerializer.new(event)
      else
          render json: {message: event.errors.full_messages}
        end
    end
  
    def destroy
      event = Event.find_by(id: params[:id])
      event.destroy
      render json: {message: "success"}
    end

    def update
      event = Event.find_by(id: params[:id])
      event.update(event_params)
      render json: event
    end

    def index
      render json: Event.all
    end

    private
  
    def event_params
      params.require(:new_event).permit(:title, :description, :day, :month, :year)
    end
  
  end