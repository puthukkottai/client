import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import TagsList from "./TagsList";
import "./Tags.css";

const Tags = () => {
  const tagsList = [
    {
      id: 1,
      tagName: "python",
      tagDesc: "Python is a versatile and high-level programming language",
    },
    {
      id: 2,
      tagName: "javascript",
      tagDesc:
        "JavaScript is a popular scripting language used for web development",
    },
    {
      id: 3,
      tagName: "html",
      tagDesc: "HTML is the standard markup language for creating web pages",
    },
    {
      id: 4,
      tagName: "css",
      tagDesc: "CSS is used for styling and layout of web pages",
    },
    {
      id: 5,
      tagName: "reactjs",
      tagDesc: "React is a JavaScript library for building user interfaces",
    },
    {
      id: 6,
      tagName: "nodejs",
      tagDesc: "Node.js is a runtime environment for server-side JavaScript",
    },
    {
      id: 7,
      tagName: "redux",
      tagDesc:
        "Redux is a predictable state management library for JavaScript apps",
    },
    {
      id: 8,
      tagName: "typescript",
      tagDesc:
        "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript",
    },
    {
      id: 9,
      tagName: "c",
      tagDesc: "C is a widely used and general-purpose programming language",
    },
    {
      id: 10,
      tagName: "c++",
      tagDesc: "C++ is a powerful and versatile programming language",
    },
    {
      id: 11,
      tagName: "android",
      tagDesc: "Android is an open-source mobile operating system",
    },
    {
      id: 12,
      tagName: "mongodb",
      tagDesc:
        "MongoDB is a popular NoSQL database used for scalable applications",
    },
    {
      id: 13,
      tagName: "sql",
      tagDesc: "SQL is a standard language for managing relational databases",
    },
    {
      id: 14,
      tagName: "mysql",
      tagDesc: "MySQL is an open-source relational database management system",
    },
    {
      id: 15,
      tagName: "c#",
      tagDesc:
        "C# ( see SHARP) is a general-purpose high-level programming language supporting multiple paradigms.",
    },
    {
      id: 15,
      tagName: "php",
      tagDesc:
        "PHP is a popular general-purpose scripting language for web development.",
    },
    {
      id: 16,
      tagName: "jquery",
      tagDesc: "jQuery is a fast, small, and feature-rich JavaScript library.",
    },
    {
      id: 17,
      tagName: "mysql",
      tagDesc: "MySQL is an open-source relational database management system",
    },
    {
      id: 17,
      tagName: "ios",
      tagDesc:
        "iOS is the mobile operating system running on the Apple iPhone, iPod touch, and iPad.",
    },
    {
      id: 17,
      tagName: "r",
      tagDesc:
        "R is a free, open-source programming language & software environment for statistical computing, bioinformatics, visualization & general computing.",
    },
    {
      id: 17,
      tagName: "arrays",
      tagDesc:
        "An array is an ordered linear data structure consisting of a collection of elements (values, variables, or references), each identified by one or more indexes.",
    },
    {
      id: 17,
      tagName: "asp.net",
      tagDesc:
        "ASP.NET is a Microsoft web application development framework that allows programmers to build dynamic web sites, web applications and web services.",
    },
    {
      id: 17,
      tagName: "json",
      tagDesc:
        "JSON (JavaScript Object Notation) is a serializable data interchange format that is a machine and human readable. ",
    },
    {
      id: 17,
      tagName: "python-3.x",
      tagDesc:
        "DO NOT USE UNLESS YOUR QUESTION IS FOR PYTHON 3 ONLY. Always use alongside the standard [python] tag.",
    },
    {
      id: 17,
      tagName: "ruby-on-rails",
      tagDesc:
        "Ruby on Rails is an open source full-stack web application framework written in Ruby.",
    },
    {
      id: 17,
      tagName: ".net",
      tagDesc:
        "Do NOT use for questions about .NET Core - use [.net-core] instead. ",
    },
    {
      id: 17,
      tagName: "sql-server",
      tagDesc:
        "Microsoft SQL Server is a relational database management system (RDBMS). ",
    },
    {
      id: 17,
      tagName: "swift",
      tagDesc:
        "Swift is a general-purpose programming language developed by Apple Inc first released in 2014 for its platforms and Linux.",
    },
    {
      id: 17,
      tagName: "django",
      tagDesc:
        "Django is an open-source server-side web application framework written in Python.",
    },
    {
      id: 17,
      tagName: "angular",
      tagDesc:
        "Questions about Angular (not to be confused with AngularJS), the web framework from Google.",
    },
    {
      id: 17,
      tagName: "regex",
      tagDesc:
        "Regular expressions provide a declarative language to match patterns within strings.",
    },
    {
      id: 17,
      tagName: "ruby",
      tagDesc:
        "Ruby is a multi-platform open-source, dynamic object-oriented interpreted language.",
    },
    {
      id: 17,
      tagName: "linux",
      tagDesc:
        " All Linux questions must be related to programming; those that aren't will be closed.",
    },
    {
      id: 17,
      tagName: "ajax",
      tagDesc:
        "AJAX (Asynchronous JavaScript and XML) is a technique for creating interactive website user interfaces without the traditional web page refresh or reload.",
    },
    {
      id: 17,
      tagName: "iphone",
      tagDesc:
        "DO NOT use this tag unless you are addressing Apple's iPhone and/or iPod touch specifically.",
    },
    {
      id: 17,
      tagName: "xml",
      tagDesc:
        "XML (Extensible Markup Language) is a structured document format defining text encoding rules.",
    },
    {
      id: 17,
      tagName: "vba",
      tagDesc:
        "Visual Basic for Applications (VBA) is an event-driven, object-oriented programming language for writing macros, used for the entire Office suite as well as other applications.",
    },
    {
      id: 17,
      tagName: "laravel",
      tagDesc:
        "The Laravel framework is an open-sourced PHP web framework that allows developers to create dynamic and scalable web applications. ",
    },
    {
      id: 17,
      tagName: "spring",
      tagDesc:
        "The Spring Framework is an open-source framework for application development on the Java platform. ",
    },
    {
      id: 17,
      tagName: "asp.net-mvc",
      tagDesc:
        "The ASP.NET MVC Framework is an open source web application framework and tooling that implements a version of the model-view-controller (MVC) pattern tailored towards web applications and built upon an ASP.NET technology foundation.",
    },
    {
      id: 17,
      tagName: "database",
      tagDesc:
        "A database is an organized collection of data. It is the collection of schemas, tables, queries, reports, views, and other objects.",
    },
    {
      id: 17,
      tagName: "wordpress",
      tagDesc:
        "Consider using . This tag is for programming-specific questions about the WordPress content management system",
    },
    {
      id: 17,
      tagName: "string",
      tagDesc:
        "A string is a finite sequence of symbols, commonly used for text, though sometimes for arbitrary data. ",
    },
    {
      id: 17,
      tagName: "postgresql",
      tagDesc:
        "PostgreSQL is an open-source, relational database management system (RDBMS) available for all major platforms, including Linux, UNIX, Windows and OS X. Mention your version of Postgres when asking questions.",
    },
    {
      id: 17,
      tagName: "flutter",
      tagDesc:
        "Use this tag for questions about the Flutter cross-platform UI toolkit. ",
    },
    {
      id: 17,
      tagName: "wpf",
      tagDesc:
        "Windows Presentation Foundation, or WPF, is a subsystem for rendering user interfaces in Windows-based applications.",
    },
    {
      id: 17,
      tagName: "windows",
      tagDesc:
        "Writing software specific to the Microsoft Windows operating system: APIs, behaviours, etc. ",
    },
    {
      id: 17,
      tagName: "xcode",
      tagDesc: "Xcode is Apple's integrated development environment (IDE).  ",
    },
    {
      id: 17,
      tagName: "amazon-web-services",
      tagDesc:
        "When asking about Amazon Web Services (AWS), specify which services you are using. ",
    },
    {
      id: 17,
      tagName: "bash",
      tagDesc:
        "This tag is for questions about scripts written for the Bash command shell. ",
    },
    {
      id: 17,
      tagName: "git",
      tagDesc:
        "Git is an open-source distributed version control system (DVCS). ",
    },
    {
      id: 17,
      tagName: "oracle",
      tagDesc:
        " Oracle Database is a Multi-Model Database Management System created by Oracle Corporation.",
    },
    {
      id: 17,
      tagName: "spring-boot",
      tagDesc:
        "Use the Spring Boot tag for questions related to spring boot framework and the features it brings to your Web application.  ",
    },
    {
      id: 17,
      tagName: "dataframe",
      tagDesc:
        "A data frame is a 2D tabular data structure. Usually, it contains data where rows are observations and columns are variables and are allowed to be of different types (as distinct from an array or matrix). ",
    },
    {
      id: 17,
      tagName: "firebase",
      tagDesc:
        " Firebase is a serverless platform for unified development of applications for mobile devices and for the web. ",
    },
    {
      id: 17,
      tagName: "list",
      tagDesc:
        " The list tag may refer to: a linked list (an ordered set of nodes, each referencing its successor), or a form of dynamic array. ",
    },
    {
      id: 17,
      tagName: "vb.net",
      tagDesc:
        "Visual Basic.NET (VB.NET) is a multi-paradigm, managed, type-safe, object-oriented computer programming language. ",
    },
    {
      id: 17,
      tagName: "multithreading",
      tagDesc:
        " For questions regarding multi-threading, the ability of a computer or a program to perform work concurrently or asynchronously by utilizing multiple concurrent streams of execution (generally referred to as threads).",
    },
    {
      id: 17,
      tagName: "azure",
      tagDesc:
        " crosoft Azure is a Platform as a Service and Infrastructure as a Service cloud computing platform.",
    },
    {
      id: 17,
      tagName: "docker",
      tagDesc: " For questions about building and running Docker containers. ",
    },
    {
      id: 17,
      tagName: "react-native",
      tagDesc:
        "React Native is a JavaScript library used to build native mobile apps using React.  ",
    },
    {
      id: 17,
      tagName: "eclipse",
      tagDesc:
        " Eclipse is an open source IDE and platform for building applications. ",
    },
    {
      id: 17,
      tagName: "algorithm",
      tagDesc:
        " An algorithm is a sequence of well-defined steps that defines an abstract solution to a problem.",
    },
    {
      id: 17,
      tagName: "macos",
      tagDesc:
        "macOS (formerly known as OS X or Mac OS X) is the desktop operating system from Apple, found on Macintosh computers. ",
    },
    {
      id: 17,
      tagName: "powershell",
      tagDesc:
        " PowerShell is a cross-platform command line and scripting utility from Microsoft. ",
    },
    {
      id: 17,
      tagName: "visual-studio",
      tagDesc:
        " Use this tag if you have a specific question about Visual Studio features and functionality.",
    },
    {
      id: 17,
      tagName: "image",
      tagDesc:
        "The image tag is for questions related to the loading, formatting, saving, compression, and display of images in the context of source code.  ",
    },
    {
      id: 17,
      tagName: "forms",
      tagDesc:
        " A form is essentially a container that can be used to hold any amount of any subset of several types of data. ",
    },
    {
      id: 17,
      tagName: "numpy",
      tagDesc:
        " NumPy is one of the many modules in Python that adds support of large multidimensional arrays and matrixes, along with a large library of high-level mathematical functions for operations with these arrays.",
    },
    {
      id: 17,
      tagName: "scala",
      tagDesc:
        "Scala is a general-purpose programming language principally targeting the Java Virtual Machine. ",
    },
    {
      id: 17,
      tagName: "function",
      tagDesc:
        "A function (also called a procedure, method, subroutine, or routine or macro) is a portion of code intended to carry out a single, specific task. Use this tag for questions which specifically involve creating or calling functions. ",
    },
    {
      id: 17,
      tagName: "vue.js",
      tagDesc:
        " Vue.js is an open-source, progressive JavaScript framework for building user interfaces that aims to be incrementally adoptable.",
    },
    {
      id: 17,
      tagName: "twitter-bootstrap",
      tagDesc:
        " Bootstrap is a frontend framework designed to kick-start development of Web apps and sites.",
    },
    {
      id: 17,
      tagName: "api",
      tagDesc:
        " DO NOT USE. Use specific tags like [google-cloud-platform], [facebook], [amazon-web-services] instead or [api-design] where applicable.",
    },
    {
      id: 17,
      tagName: "performance",
      tagDesc:
        " For questions pertaining to the measurement or improvement of code and application efficiency. ",
    },
    {
      id: 17,
      tagName: "selenium",
      tagDesc:
        " Selenium WebDriver provides the WebDriver API for controlling browsers in different programming languages ",
    },
    {
      id: 17,
      tagName: "winforms",
      tagDesc:
        "WinForms is the informal name given to Windows Forms, a GUI class library in the Microsoft .NET Framework and Mono. ",
    },
    {
      id: 17,
      tagName: "loops",
      tagDesc:
        "Loops are a type of control flow structure in programming in which a series of statements may be executed repeatedly until some condition is met. ",
    },
    {
      id: 17,
      tagName: "python-2.7",
      tagDesc:
        " Python 2.7 is the last major version in the 2.x series, and is no longer maintained since January 1st 2020.",
    },
    {
      id: 17,
      tagName: "express",
      tagDesc:
        "Express.js is a minimal and flexible Node.js web application framework providing a robust set of features for building web applications.  ",
    },
    {
      id: 17,
      tagName: "matlab",
      tagDesc:
        " DO NOT use both the [matlab] and [octave] tags unless the question is explicitly about the similarities or differences between the two. ",
    },
    {
      id: 17,
      tagName: "hibernate",
      tagDesc:
        "Hibernate is an object-relational mapping (ORM) library for the Java language enabling developers to utilize POJO-style domain models in their applications in ways extending well beyond Object/Relational Mapping.  ",
    },
    {
      id: 17,
      tagName: "sqlite",
      tagDesc:
        "SQLite is an open-source software library that implements a self-contained, serverless, zero-configuration, transactional SQL database engine. ",
    },
    {
      id: 17,
      tagName: "kotlin",
      tagDesc:
        " Kotlin is a cross-platform, statically typed, general-purpose high-level programming language with type inference. ",
    },
    {
      id: 17,
      tagName: "rest",
      tagDesc:
        " REST (Representational State Transfer) is a style of software architecture for distributed hypermedia systems such as the World Wide Web.",
    },
    {
      id: 17,
      tagName: "dart",
      tagDesc:
        " Dart is a class-based, statically(& strongly)-typed programming language for building web and mobile applications",
    },
    {
      id: 17,
      tagName: "facebook",
      tagDesc:
        " Facebook Platform lets developers integrate their apps directly into the Facebook social networking service. Use this tag for questions which may arise when developing FOR Facebook. ",
    },
  ];

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p">
          A tag is a keyword or label that categories your question with other,
          similar questions.
        </p>
        <p className="tags-p">
          Using the right tags makes it easier for others to find and answer
          your question.
        </p>
        <div className="tags-list-container">
          {tagsList.map((tag) => (
            <TagsList tag={tag} key={tagsList.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
