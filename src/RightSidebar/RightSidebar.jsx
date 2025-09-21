import React from 'react';
import './RightSidebar.css';
import Right1 from "../Assets/righ1.svg";
import User1 from "../Assets/User1.svg";
import Broad from "../Assets/broad.svg";
import Pic from "../Assets/Pic.png";




const RightSidebar = () => {
  const notifications = [
    {
      id: 1,
      icon: (
                    <img src={Right1} alt="icon" />
        
      ),
      title: "You have a bug that needs...",
      time: "Just now"
    },
    {
      id: 2,
      icon: (
                            <img src={User1} alt="icon" />

      ),
      title: "New user registered",
      time: "59 minutes ago"
    },
    {
      id: 3,
      icon: (
                           <img src={Right1} alt="icon" />

      ),
      title: "You have a bug that needs...",
      time: "12 hours ago"
    },
    {
      id: 4,
      icon: (
                            <img src={Broad} alt="icon" />

      ),
      title: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM"
    }
  ];

  const activities = [
    {
      id: 1,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
      title: "You have a bug that needs...",
      time: "Just now"
    },
    {
      id: 2,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format",
      title: "Released a new version",
      time: "59 minutes ago"
    },
    {
      id: 3,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face&auto=format",
      title: "Submitted a bug",
      time: "12 hours ago"
    },
    {
      id: 4,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face&auto=format",
      title: "Modified A data in Page X",
      time: "Today, 11:59 AM"
    },
    {
      id: 5,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face&auto=format",
      title: "Deleted a page in Project X",
      time: "Feb 2, 2023"
    }
  ];

  const contacts = [
    {
      id: 1,
      name: "Natali Craig",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face&auto=format"
    },
    {
      id: 2,
      name: "Drew Cano",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format"
    },
    {
      id: 3,
      name: "Orlando Diggs",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format"
    },
    {
      id: 4,
      name: "Andi Lane",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face&auto=format"
    },
    {
      id: 5,
      name: "Kate Morrison",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face&auto=format"
    },
    {
      id: 6,
      name: "Koray Okumus",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face&auto=format"
    }
  ];

  return (
    <div className="right-sidebar">
      {/* Notifications Section */}
      <div className="sidebar-section">
        <h3 className="section-title1">Notifications</h3>
        <div className="notification-list">
          {notifications.map((notification) => (
            <div key={notification.id} className="notification-item">
              <div className="notification-icon">
                {notification.icon}
              </div>
              <div className="notification-content">
                <div className="notification-title">{notification.title}</div>
                <div className="notification-time">{notification.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activities Section */}
      <div className="sidebar-section">
        <h3 className="section-title1">Activities</h3>
        <div className="activity-list">
          {activities.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-avatar">
                <img src={Pic} alt="" />
              </div>
              <div className="activity-content">
                <div className="activity-title">{activity.title}</div>
                <div className="activity-time">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts Section */}
      <div className="sidebar-section">
        <h3 className="section-title1">Contacts</h3>
        <div className="contact-list">
          {contacts.map((contact) => (
            <div key={contact.id} className="contact-item">
              <div className="contact-avatar">
                <img src={Pic} alt={contact.name} />
              </div>
              <div className="contact-name">{contact.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;