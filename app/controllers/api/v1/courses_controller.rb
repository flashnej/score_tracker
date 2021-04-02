class Api::V1::CoursesController < ApplicationController
    protect_from_forgery with: :null_session

    def create
        name = params["name"]
        par = params["par"]
        slope_rating = params["slopeRating"]
        course_rating = params["courseRating"]
        course = Course.new(name: name, par: par, slope_rating: slope_rating, course_rating: course_rating)
        if course.save! 
            render json: {good: "Course added successfully"}
        else
            render json: {error: "Error adding course"}
        end
    end

    def index
        courses = Course.all
        course_names = courses.map { |course| course["name"]}
        render json: {courses: course_names}
    end
end
