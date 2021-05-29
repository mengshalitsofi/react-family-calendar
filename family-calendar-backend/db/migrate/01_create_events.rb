class CreateEvents < ActiveRecord::Migration[6.0]
    def change
        create_table :events do |t|
            t.string :title
            t.string :description
            t.numeric :day
            t.numeric :month
            t.numeric :year

            t.timestamps
        end
    end
end