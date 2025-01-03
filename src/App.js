import Nav from "./components/Nav";
import FirstSection from "./components/FirstSection";
import CustomCard from "./components/CustomCard";
import FinalSection from "./components/FinalSection";
import Footer from "./components/Footer";
import connectCard from "./assets/connect_cards_full_screen.svg";
import paymentCard from "./assets/payment_full_screen.svg";
import bookingsCard from "./assets/check_in.svg";
import finalDashboard from "./assets/dashboard_final.svg";
import dashboardResponsive from "./assets/dashboard_responsive.png";
import paymentResponsive from "./assets/payment_responsive.png";
import formResponsive from "./assets/form_responsive.png";
import bookingsResponsive from "./assets/calendar_responsive.png";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(lines.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-[#FAFAFA]"
    >
      <div className="w-full max-w-screen-2xl mx-auto pt-12">
        <header>
          <Nav />
        </header>
        <FirstSection />
        <div className="py-8 md:py-16 space-y-24 px-4 md:px-10 md:space-y-40">
          <div className="flex justify-between gap-4 flex-col lg:flex-row max-w-7xl mx-auto">
            <CustomCard
              tag="Property Management"
              heading="Unified Property Management: Seamlessly Integrate with Airbnb, Booking.com, and More"
              body="Experience interoperable property management by integrating all your tools into one simple, efficient dashboard"
            />
            <img src={connectCard} alt="Connect card" />
            <img
              src={formResponsive}
              alt="Payment card"
              className="w-full max-w-[350px] h-auto hidden"
            />
          </div>
          <div className="flex justify-between gap-4 flex-col-reverse lg:flex-row max-w-7xl mx-auto">
            <img src={paymentCard} alt="Payment card" />
            <img
              src={paymentResponsive}
              alt="Payment card"
              className="w-full max-w-[350px] h-auto hidden pt-[50px]"
            />
            <CustomCard
              tag="Payment Options"
              heading="Flexible Payment Options: Local and International Currencies Welcome"
              body="Accommodate a global clientele with versatile payment solutions tailored for both Local and international transactions."
            />
          </div>
          <div className="flex justify-between gap-4 flex-col lg:flex-row max-w-7xl mx-auto">
            <CustomCard
              tag="Bookings"
              heading="Seamless Direct Booking: Elevate Your Guest's Experience"
              body="Manage private bookings professionally. From reservation to payment, ensure your guests enjoy a smooth and hassle-free experience"
            />
            <img
              src={bookingsCard}
              alt="Bookings card"
              className="hidden md:block"
            />
            <img
              src={bookingsResponsive}
              alt="Payment card"
              className="w-full max-w-[350px] h-auto md:hidden"
            />
          </div>
          <div className="flex flex-col items-center md:items-start md:mx-[50px]">
            <CustomCard
              tag="Data Analysis"
              heading="Data-Driven Insights: Your Business at a Glance"
              body="Make informed decisions with comprehensive data on occupancy rates, revenue,and property status, all available in an easy-to-read format."
              className="last-section-spacing-custom-card"
            />
            <img
              src={finalDashboard}
              alt="Final dashboard"
              className="hidden md:block"
            />
            <img
              src={dashboardResponsive}
              alt="Payment card"
              className="w-full max-w-[350px] h-auto md:hidden"
            />
          </div>
        </div>
        <div className="flex justify-center bg-white">
          <FinalSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
