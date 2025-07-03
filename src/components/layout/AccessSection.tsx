import React from "react";
import styled from "styled-components";
import SectionTitleTwo from "../ui/SectionTitleTwo";

const MyAccessSection = styled.section`
  background-color: ${(props) => props.theme.pallet.secondary.main};
  padding: 48px 0;

  @media (max-width: 768px) {
    padding: 32px 0;
  }
`;

const AccessWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 768px) {
    padding: 0 8px;
  }
`;

const AccessContent = styled.div`
  background-color: ${(props) => props.theme.pallet.baseWhite.main};
  border-radius: 40px;
  padding: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    padding: 24px 16px;
    border-radius: 24px;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 250px;
    margin-bottom: 24px;
  }
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const AccessInfoContainer = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const AccessCategory = styled.div`
  flex: 1;
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props) => props.theme.pallet.heading.main};
  margin-bottom: 16px;
  border-left: 4px solid ${(props) => props.theme.pallet.primary.main};
  padding-left: 12px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
`;

const AccessItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  padding: 12px 16px;
  border-radius: 12px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
    padding: 10px 12px;
  }
`;

const TransportIcon = styled.div`
  background-color: ${(props) => props.theme.pallet.primary.main};
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  min-width: 60px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 0.7rem;
    min-width: 35px;
  }
`;

const AccessDetails = styled.div`
  flex: 1;
`;

const StationName = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme.pallet.heading.main};
  margin-bottom: 2px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const AccessTime = styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme.pallet.subText.main};

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CampusInfo = styled.div`
  text-align: center;
  margin-bottom: 32px;
  padding: 20px;
  background-color: ${(props) => props.theme.pallet.secondary.main};
  border-radius: 16px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
    padding: 16px;
  }
`;

const CampusName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.pallet.primary.main};
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const CampusAddress = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.pallet.heading.main};
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const AccessSection: React.FC = () => {
  return (
    <MyAccessSection>
      <AccessWrapper>
        <SectionTitleTwo
          englishTitle="Access"
          japaneseTitle="アクセス"
          isLightTheme={false}
        />
        <AccessContent>
          <MapContainer>
            <MapFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280885177866!2d139.7673068!3d35.6809591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1704000000000!5m2!1sja!2sjp"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="東京駅周辺地図"
            />
          </MapContainer>

          <CampusInfo>
            <CampusName>東京キャンパス</CampusName>
            <CampusAddress>
              〒100-0005 東京都千代田区丸の内 123-456-789<br />
            </CampusAddress>
          </CampusInfo>

          <AccessInfoContainer>
            <AccessCategory>
              <CategoryTitle>電車でのアクセス</CategoryTitle>
              <AccessItem>
                <TransportIcon>JR線</TransportIcon>
                <AccessDetails>
                  <StationName>「東京駅」丸の内中央口より徒歩3分</StationName>
                  <AccessTime>山手線・京浜東北線・東海道線・中央線が利用可能です。</AccessTime>
                </AccessDetails>
              </AccessItem>
              <AccessItem>
                <TransportIcon>地下鉄</TransportIcon>
                <AccessDetails>
                  <StationName>「大手町駅」B7出口より徒歩5分</StationName>
                  <AccessTime>丸ノ内線・千代田線・半蔵門線・東西線が利用可能です。</AccessTime>
                </AccessDetails>
              </AccessItem>
            </AccessCategory>
            <AccessCategory>
              <CategoryTitle>バスでのアクセス</CategoryTitle>
              <AccessItem>
                <TransportIcon>都バス</TransportIcon>
                <AccessDetails>
                  <StationName>「丸の内南口」バス停より徒歩1分</StationName>
                  <AccessTime>東京駅丸の内南口バス乗り場よりお乗りください。</AccessTime>
                </AccessDetails>
              </AccessItem>
            </AccessCategory>
          </AccessInfoContainer>
        </AccessContent>
      </AccessWrapper>
    </MyAccessSection>
  );
};

export default AccessSection;