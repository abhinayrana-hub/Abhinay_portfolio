const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-6 sm:px-8 bg-gradient-to-b from-emerald-50 to-teal-50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white/95 p-8 shadow-2xl">
          <div className="absolute -left-16 top-10 h-32 w-32 rounded-full bg-emerald-100 blur-3xl"></div>
          <div className="absolute -right-20 top-10 h-40 w-40 rounded-full bg-teal-100 blur-3xl"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Let's Connect
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Want to reach out? I welcome opportunities, collaborations, and
              thoughtful conversations. Send mail to{" "}
              <strong>connect@abhinayrana.com</strong> and I’ll reply as soon as
              possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 relative z-10">
            <div className="rounded-[1.75rem] border border-emerald-100 bg-emerald-50 p-7 shadow-lg">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-emerald-700 mb-2">Email</h3>
              <p className="text-gray-700">connect@abhinayrana.com</p>
            </div>

            <a
              href="https://abhinayrana.blog"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[1.75rem] border border-purple-100 bg-purple-50 p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">Blog</h3>
              <p className="text-gray-700">
                Read my travel and dev stories on the blog.
              </p>
            </a>

            <a
              href="https://linkedin.com/in/abhinay-rana-852415221"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[1.75rem] border border-blue-100 bg-blue-50 p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">LinkedIn</h3>
              <p className="text-gray-700">
                Connect with me professionally and explore my work.
              </p>
            </a>
          </div>

          <div className="mt-10 text-center text-sm text-gray-500">
            <p>Made with 💚 by Abhinay Rana</p>
            <p className="mt-2">
              Open to collaborations and mountain adventures 🏔️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
