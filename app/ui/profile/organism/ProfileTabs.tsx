import { TabButton } from "~/ui/shared/molecules/TabButton";

interface ProfileTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export const ProfileTabs = ({ activeTab, onTabChange }: ProfileTabsProps) => (
    <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex">
            <li className="mr-2">
                <TabButton
                    active={activeTab === 'personal'}
                    onClick={() => onTabChange('personal')}
                >
                    Información Personal
                </TabButton>
            </li>
            <li className="mr-2">
                <TabButton
                    active={activeTab === 'password'}
                    onClick={() => onTabChange('password')}
                >
                    Cambiar Contraseña
                </TabButton>
            </li>
            <li className="mr-2">
                <TabButton
                    active={activeTab === 'medical'}
                    onClick={() => onTabChange('medical')}
                >
                    Información Médica
                </TabButton>
            </li>
        </ul>
    </div>
);