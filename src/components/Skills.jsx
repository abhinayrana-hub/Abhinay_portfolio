const Skills = () => {
    return (
      <section id="skills" className="p-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Skills & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-800">
          <div><strong>Languages:</strong> Java, JavaScript, TypeScript</div>
          <div><strong>Frameworks:</strong> Spring Boot, React, Next.js</div>
          <div><strong>Tools:</strong> VS Code, IntelliJ, Postman, Maven</div>
          <div><strong>DB & Cloud:</strong> MySQL, Azure App Service</div>
          <div><strong>DevOps:</strong> Docker, Azure Automation</div>
          <div><strong>Certifications:</strong> Databricks Lakehouse (2023)</div>
        </div>
      </section>
    )
  }
  export default Skills