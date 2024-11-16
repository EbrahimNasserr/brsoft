const Section1 = () => {
  return (
    <section className="h-screen relative">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=cairo+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
        <div className="bg-footer absolute bottom-0 left-0 right-0 h-52 bg-no-repeat rotate-180 bg-cover"></div>
    </section>
  );
};

export default Section1;
