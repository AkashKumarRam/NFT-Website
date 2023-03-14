import React, {useState} from "react";
import Profile from "../../../images/profile_photo.png";
// import { useNavigate } from "react-router-dom";
import ArtworkBlue from "../../../images/ArtworkBlue.png";
import ArtworkGray from "../../../images/ArtworkGray.png";
import CollectionBlue from "../../../images/CollectionBlue.png";
import CollectionGray from "../../../images/CollectionGray.png";
import DashBoardBlue from "../../../images/DashBoardBlue.png";
import DashBoardGray from "../../../images/DashBoardGray.png";
import IntegrationBlue from "../../../images/IntegrationBlue.png";
import IntegrationGray from "../../../images/IntegrationGray.png";
import SettingsBlue from "../../../images/SettingsBlue.png";
import SettingsGray from "../../../images/SettingsGray.png";
import TargetBlue from "../../../images/TargetBlue.png";
import TargetGray from "../../../images/TargetGray.png";
import MenuList from "./MenuList";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  }

  return (
    <div>
      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-white shadow-md ">
          <div className="ml-3 pb-5 pt-5 flex flex-rom items-center space-x-5 cursor-pointer">
            <img src={Profile} alt="ProfileImage" />
            <div>
              <p className="font-poppins">Sierra Ferguson</p>
              <p className="font-poppins text-xs text-[#90A0B7]">
                s.ferguson@gmail.com
              </p>
            </div>
          </div>
          <ul class="space-y-2 cursor-pointer">
            <li>
              <MenuList
                graySrc={DashBoardGray}
                blueSrc={DashBoardBlue}
                text={"Dashboard"}
                toNavigate={"/admin-dashboard"}
              />
            </li>
            <li>
              <MenuList
                graySrc={TargetGray}
                blueSrc={TargetBlue}
                text={"Targeting"}
                toNavigate={"/targeting"}
              />
            </li>
            <li>
              <MenuList
                graySrc={CollectionGray}
                blueSrc={CollectionBlue}
                text={"Collection"}
                toNavigate={"/collection"}
              />
            </li>
            <li>
              <MenuList
                graySrc={ArtworkGray}
                blueSrc={ArtworkBlue}
                text={"Artwork"}
                toNavigate={"/artwork"}
              />
            </li>
            <li>
              <MenuList
                graySrc={IntegrationGray}
                blueSrc={IntegrationBlue}
                text={"Integration"}
                toNavigate={"/integration"}
              />
            </li>
            <hr />
            <li>
              <div className="mt-[0.5rem]">
                <MenuList
                  graySrc={SettingsGray}
                  blueSrc={SettingsBlue}
                  text={"Settings"}
                  toNavigate={"/settings"}
                />
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
