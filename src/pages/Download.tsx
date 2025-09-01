
import DownloadHeader from '@/components/download/DownloadHeader';
import DownloadTitle from '@/components/download/DownloadTitle';
import LatestRelease from '@/components/download/LatestRelease';
import SystemRequirements from '@/components/download/SystemRequirements';
import ImportantNotice from '@/components/download/ImportantNotice';
import SecurityFirst from '@/components/download/SecurityFirst';
import WhyChooseArch from '@/components/download/WhyChooseArch';
import InstallationSteps from '@/components/download/InstallationSteps';

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <DownloadHeader />

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <DownloadTitle />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-8">
          {/* Left Column - Download Section */}
          <div className="space-y-8">
            <LatestRelease />
            <SystemRequirements />
            <SecurityFirst />
          </div>

          {/* Right Column - Features & Installation */}
          <div className="space-y-8">
            <WhyChooseArch />
            <InstallationSteps />
          </div>
        </div>

        {/* Full Width Important Notice */}
        <div className="w-full">
          <ImportantNotice />
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
