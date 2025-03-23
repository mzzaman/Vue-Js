// import { ref, watch } from 'vue';

// interface SettingsMap {
//   general: GeneralSettings;
//   privacy: PrivacySettings;
//   notifications: NotificationsSettings;
// }

// type SettingsKey = keyof SettingsMap;

// interface GeneralSettings {
//   userName: string;
//   email: string;
//   aboutMe: string;
//   gender: string;
//   country: string;
// }

// const init = <T extends SettingsKey>(key: T, defaults: SettingsMap[T]) => {
//   const stored = localStorage.getItem(key);
//   return stored !== null ? JSON.parse(stored) : defaults;
// };

// interface NotificationsSettings {
//   email: boolean;
//   sms: boolean;
// }

// type Visibility = 'public' | 'private';

// interface PrivacySettings {
//   visibility: Visibility;
//   searchEngineIndexing: boolean;
// }
// const general = ref<GeneralSettings>(
//   init('general', {
//     aboutMe: '',
//     country: 'Bangladesh',
//     gender: 'male',
//     email: '',
//     userName: '',
//   }),
// );

// const notifications = ref<NotificationsSettings>(
//   init('notifications', {
//     email: false,
//     sms: false,
//   }),
// );

// const privacy = ref<PrivacySettings>(
//   init('privacy', {
//     visibility: 'public',
//     searchEngineIndexing: false,
//   }),
// );

// const watcher =
//   <T extends SettingsKey>(key: T) =>
//   (value: SettingsMap[T]) => {
//     localStorage.setItem(key, JSON.stringify(value));
//   };

// watch(general, watcher('general'), { deep: true });
// watch(notifications, watcher('notifications'), { deep: true });
// watch(privacy, watcher('privacy'), { deep: true });

// export default function useSettings() {
//   return {
//     general,
//     notifications,
//     privacy,
//   };
// }

import { ref, watch } from 'vue';

interface SettingsMap {
  general: GeneralSettings;
  privacy: PrivacySettings;
  notifications: NotificationsSettings;
}

type SettingsKey = keyof SettingsMap;

interface GeneralSettings {
  userName: string;
  email: string;
  aboutMe: string;
  gender: string;
  country: string;
}

const init = <T extends SettingsKey>(key: T, defaults: SettingsMap[T]) => {
  try {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : defaults;
  } catch (error) {
    console.error(`Error parsing ${key} from localStorage:`, error);
    return defaults;
  }
};

interface NotificationsSettings {
  email: boolean;
  sms: boolean;
}

type Visibility = 'public' | 'private';

interface PrivacySettings {
  visibility: Visibility;
  searchEngineIndexing: boolean;
}

const general = ref<GeneralSettings>(
  init('general', {
    aboutMe: '',
    country: 'Bangladesh',
    gender: 'male',
    email: '',
    userName: '',
  }),
);

const notifications = ref<NotificationsSettings>(
  init('notifications', {
    email: false,
    sms: false,
  }),
);

const privacy = ref<PrivacySettings>(
  init('privacy', {
    visibility: 'public',
    searchEngineIndexing: false,
  }),
);

const watcher =
  <T extends SettingsKey>(key: T) =>
  (value: SettingsMap[T]) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      console.log(`Updated localStorage: ${key}`, value);
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  };

watch(general, watcher('general'), { deep: true });
watch(notifications, watcher('notifications'), { deep: true });
watch(privacy, watcher('privacy'), { deep: true });

export default function useSettings() {
  return {
    general,
    notifications,
    privacy,
  };
}
