export default function NavItems() {
  return (
    <>
      <nav className="nav-items-container">
        <div className="sending-container">
          <div className="send-icon"></div>
        </div>
        <div className="notification-container">
          <div className="notification-sub-icon"></div>
          <div className="notification-icon"></div>
        </div>
        <div className="ticket-container">
          <div className="ticket-icon"></div>
        </div>
        <div className="profile-container">
          <div className="profile-icon"></div>
        </div>
      </nav>
      <style jsx>
        {`
          .nav-items-container {
            width: 15rem;
            height: 2.5rem;
            position: absolute;
            top: 0.52rem;
            right: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
          }
          .sending-container {
            width: 2.5rem;
            height: 2.5rem;
            opacity: 0.800000011920929;
            border: 1px solid rgba(195, 212, 233, 0.4000000059604645);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .send-icon {
            width: 1.5rem;
            height: 1.5rem;
            background: url("/letter-send-icon.svg");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }
          .notification-container {
            width: 2.5rem;
            height: 2.5rem;
            opacity: 0.800000011920929;
            border: 1px solid rgba(195, 212, 233, 0.4000000059604645);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .notification-icon {
            width: 1rem;
            height: 1.3rem;
            background: url("/notification-icon.svg");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }
          .notification-sub-icon {
            width: 0.7rem;
            height: 0.7rem;
            background: rgba(255, 68, 35, 1);
            position: absolute;
            top: 0.1rem;
            left: 7.3rem;
            border-radius: 50%;
          }
          .ticket-container {
            width: 2.5rem;
            height: 2.5rem;
            opacity: 0.800000011920929;
            border: 1px solid rgba(195, 212, 233, 0.4000000059604645);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ticket-icon {
            width: 1.5rem;
            height: 1.5rem;
            background: url("/ticket-icon.svg");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }
          .profile-container {
            width: 2.5rem;
            height: 2.5rem;
            opacity: 0.800000011920929;
            border: 1px solid rgba(195, 212, 233, 0.4000000059604645);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .profile-icon {
            width: 1.5rem;
            height: 1.5rem;
            background: url("/profile-icon.svg");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }
        `}
      </style>
    </>
  );
}
