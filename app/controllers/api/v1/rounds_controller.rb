class Api::V1::RoundsController < ApplicationController
    def index
        user = current_user
        rounds = user.rounds
        output = []
        rounds.each do |round|
            # binding.pry
            output.push({"id": round.id, "Course Name": round.course.name, "Score": round.score, "Course Slope": round.course.slope_rating, "Course Rating": round.course.course_rating})
        end
        render json: output
    end
end
