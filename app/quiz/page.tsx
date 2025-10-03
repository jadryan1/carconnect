export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Quiz
          </h1>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Question 1
              </h2>
              <p className="text-gray-700 mb-4">
                What is the capital of France?
              </p>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="q1" value="a" className="mr-3" />
                  <span>London</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="q1" value="b" className="mr-3" />
                  <span>Berlin</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="q1" value="c" className="mr-3" />
                  <span>Paris</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="q1" value="d" className="mr-3" />
                  <span>Madrid</span>
                </label>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Question 2
              </h2>
              <p className="text-gray-700 mb-4">
                Which programming language is known for its use in web development?
              </p>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="q2" value="a" className="mr-3" />
                  <span>Python</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="q2" value="b" className="mr-3" />
                  <span>JavaScript</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="q2" value="c" className="mr-3" />
                  <span>C++</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="q2" value="d" className="mr-3" />
                  <span>Java</span>
                </label>
              </div>
            </div>

            <div className="pt-6">
              <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Submit Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
