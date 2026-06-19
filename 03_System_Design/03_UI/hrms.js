// ==================== DỮ LIỆU MÔ PHỎNG MỞ RỘNG ====================
const fullData = {
    summary: { totalEmployees: 156, expiringContracts: 5, pendingLeaves: 4, trainingCompletion: 78 },
    departmentStats: [
        { name: 'Kỹ thuật', count: 45, color: '#1677FF' },
        { name: 'Kinh doanh', count: 38, color: '#52C41A' },
        { name: 'Nhân sự', count: 12, color: '#FAAD14' },
        { name: 'Kế toán', count: 15, color: '#F5222D' },
        { name: 'Hành chính', count: 20, color: '#1890FF' },
        { name: 'Khác', count: 26, color: '#722ED1' }
    ],
    // Đơn nghỉ phép
    pendingLeaves: [
        { id: 1, employee: 'Nguyễn Thị Lan', type: 'Phép năm', start: '22/05/2026', end: '25/05/2026', days: 3.5, department: 'Kinh doanh' },
        { id: 2, employee: 'Trần Văn Nam', type: 'Ốm', start: '20/05/2026', end: '21/05/2026', days: 2, department: 'Kỹ thuật' },
        { id: 3, employee: 'Phạm Hoàng Minh', type: 'Việc riêng', start: '28/05/2026', end: '30/05/2026', days: 3, department: 'Kỹ thuật' },
        { id: 4, employee: 'Lê Thị Hương', type: 'Phép năm', start: '01/06/2026', end: '05/06/2026', days: 5, department: 'Nhân sự' }
    ],
    // Hợp đồng sắp hết hạn
    expiringContracts: [
        { employee: 'Nguyễn Văn An', contractCode: 'HĐ-2024-001', endDate: '20/06/2026', daysLeft: 18, department: 'Kỹ thuật' },
        { employee: 'Trần Thị Bích', contractCode: 'HĐ-2024-089', endDate: '05/06/2026', daysLeft: 23, department: 'Kinh doanh' },
        { employee: 'Phạm Quốc Hưng', contractCode: 'HĐ-2023-456', endDate: '15/06/2026', daysLeft: 28, department: 'Kỹ thuật' },
        { employee: 'Đỗ Thị Mai', contractCode: 'HĐ-2025-012', endDate: '30/06/2026', daysLeft: 43, department: 'Hành chính' }
    ],
    // Danh sách hợp đồng đầy đủ
    contracts: [
        { id: 1, employee: 'Nguyễn Văn An', code: 'HĐ-2025-001', type: 'Có thời hạn', startDate: '01/01/2025', endDate: '31/12/2025', status: 'Active', department: 'Kỹ thuật' },
        { id: 2, employee: 'Trần Thị Bích', code: 'HĐ-2024-089', type: 'Không thời hạn', startDate: '15/03/2024', endDate: null, status: 'Active', department: 'Kinh doanh' },
        { id: 3, employee: 'Phạm Quốc Hưng', code: 'HĐ-2023-456', type: 'Thử việc', startDate: '01/12/2025', endDate: '28/02/2026', status: 'Draft', department: 'Kỹ thuật' }
    ],
    // Tài liệu chờ ký
    documents: [
        { id: 1, title: 'NDA - Bảo mật thông tin', sender: 'HR Admin', recipient: 'Nguyễn Văn An', expiry: '2026-05-20', status: 'pending', pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
        { id: 2, title: 'Hợp đồng lao động số 123', sender: 'HR Admin', recipient: 'Nguyễn Văn An', expiry: '2026-05-25', status: 'pending', pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
        { id: 3, title: 'Quy định làm việc từ xa', sender: 'HR Admin', recipient: 'Trần Thị Bích', expiry: '2026-05-15', status: 'signed', pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' }
    ],
    // Thiết bị
    equipment: [
        { id: 1, name: 'Laptop Dell Latitude 5540', serial: 'SN-LT-001', type: 'Laptop', status: 'Đang sử dụng', assignedDate: '01/01/2025' },
        { id: 2, name: 'Monitor LG 24 inch', serial: 'SN-MN-002', type: 'Monitor', status: 'Đang sử dụng', assignedDate: '01/01/2025' },
        { id: 3, name: 'Bàn phím Keychron K2', serial: 'SN-KB-003', type: 'Keyboard', status: 'Đang sử dụng', assignedDate: '15/02/2025' },
        { id: 4, name: 'Chuột Logitech MX Master', serial: 'SN-MS-004', type: 'Mouse', status: 'Báo hỏng', assignedDate: '01/01/2025' }
    ],
    // Xe công ty
    cars: [
        { id: 1, plate: '51A-123.45', brand: 'Toyota', model: 'Camry', color: 'Đen', year: 2022, status: 'Đang sử dụng', inspectionExpiry: '2026-06-15', insuranceExpiry: '2026-07-20' },
        { id: 2, plate: '51B-678.90', brand: 'Honda', model: 'Civic', color: 'Trắng', year: 2023, status: 'Đang sử dụng', inspectionExpiry: '2026-05-10', insuranceExpiry: '2026-08-15' },
        { id: 3, plate: '51C-111.22', brand: 'Ford', model: 'Ranger', color: 'Đỏ', year: 2021, status: 'Bảo trì', inspectionExpiry: '2026-10-20', insuranceExpiry: '2026-11-25' }
    ],
    // Lịch ca làm việc (Planning)
    planningShifts: [
        { id: 1, day: 1, dayName: 'Thứ 2', shiftName: 'Ca sáng', startTime: '08:00', endTime: '12:00', type: 'office', role: 'Pha chế', employee: 'Nguyễn Văn An' },
        { id: 2, day: 1, dayName: 'Thứ 2', shiftName: 'Ca chiều', startTime: '13:00', endTime: '17:00', type: 'office', role: 'Thu ngân', employee: 'Trần Thị Bích' },
        { id: 3, day: 2, dayName: 'Thứ 3', shiftName: 'Ca sáng', startTime: '08:00', endTime: '12:00', type: 'office', role: 'Trưởng ca', employee: 'Nguyễn Văn An' },
        { id: 4, day: 2, dayName: 'Thứ 3', shiftName: 'Ca chiều', startTime: '13:00', endTime: '17:00', type: 'remote', role: 'Pha chế', employee: 'Phạm Hoàng Minh' },
        { id: 5, day: 3, dayName: 'Thứ 4', shiftName: 'Ca sáng', startTime: '08:00', endTime: '12:00', type: 'office', role: 'Thu ngân', employee: 'Lê Thị Hương' },
        { id: 6, day: 4, dayName: 'Thứ 5', shiftName: 'Ca sáng', startTime: '08:00', endTime: '12:00', type: 'hybrid', role: 'Pha chế', employee: 'Nguyễn Văn An' }
    ],
    // Yêu cầu đổi ca
    swapRequests: [
        { id: 1, requester: 'Nguyễn Văn An', target: 'Trần Thị Bích', status: 'pending', createdDate: '2026-05-10' }
    ],
    // Đánh giá hiệu suất
    appraisals: [
        { id: 1, employee: 'Nguyễn Văn An', type: 'Định kỳ (Quý 2/2026)', reviewer: 'Trưởng phòng', status: 'pending', dueDate: '2026-05-25' },
        { id: 2, employee: 'Trần Thị Bích', type: 'Đột xuất', reviewer: 'HR Admin', status: 'completed', dueDate: '2026-05-10', score: 4.5 }
    ],
    // Timesheet entries
    timesheetEntries: [
        { id: 1, date: '2026-05-11', project: 'HRMS Development', hours: 8, description: 'Phát triển module Auth', status: 'approved' },
        { id: 2, date: '2026-05-12', project: 'HRMS Development', hours: 7.5, description: 'Sửa lỗi login', status: 'pending' },
        { id: 3, date: '2026-05-13', project: 'Support & Maintenance', hours: 4, description: 'Hỗ trợ user', status: 'pending' }
    ],
    // Khóa học
    courses: [
        { id: 1, name: 'React Advanced', progress: 50, status: 'in-progress', totalLessons: 10, completedLessons: 5 },
        { id: 2, name: 'ASP.NET Core Master', progress: 100, status: 'completed', totalLessons: 8, completedLessons: 8 }
    ],
    // Audit logs
    auditLogs: Array.from({ length: 35 }, (_, i) => ({
        id: i + 1,
        timestamp: `2026-05-${10 + (i % 15)}T${8 + (i % 10)}:00:00Z`,
        actor: i % 2 === 0 ? 'hradmin@plpsoft.com.vn' : 'manager@plpsoft.com.vn',
        action: ['CREATE', 'UPDATE', 'DELETE'][i % 3],
        entity: i % 2 === 0 ? 'HopDong' : 'NhanVien',
        oldValue: '{"status":"draft"}',
        newValue: '{"status":"active"}',
        corrupted: i === 12 ? true : false
    }))
};

// Dữ liệu cho Manager (chỉ thấy phòng Kỹ thuật)
const managerData = {
    summary: { totalEmployees: 45, expiringContracts: 2, pendingLeaves: 2, trainingCompletion: 82 },
    departmentStats: [{ name: 'Kỹ thuật', count: 45, color: '#1677FF' }],
    pendingLeaves: fullData.pendingLeaves.filter(l => l.department === 'Kỹ thuật'),
    expiringContracts: fullData.expiringContracts.filter(c => c.department === 'Kỹ thuật'),
    contracts: fullData.contracts.filter(c => c.department === 'Kỹ thuật'),
    documents: fullData.documents.filter(d => d.recipient === 'Nguyễn Văn An'),
    equipment: fullData.equipment,
    cars: fullData.cars,
    planningShifts: fullData.planningShifts.filter(s => s.employee === 'Nguyễn Văn An'),
    swapRequests: fullData.swapRequests,
    appraisals: fullData.appraisals.filter(a => a.employee === 'Nguyễn Văn An'),
    timesheetEntries: fullData.timesheetEntries,
    courses: fullData.courses,
    auditLogs: fullData.auditLogs.slice(0, 10)
};

// ==================== BIẾN TOÀN CỤC ====================
let currentRole = 'admin';
let currentView = 'dashboard';
let chartInstance = null;
let profileEditingEnabled = true;
let currentLeaveRemainingDays = 12;
let otpAttempts = 0;
let otpTimerInterval = null;
let currentApprovalLeaveId = null;
let currentAuditPage = 1;
const pageSize = 10;
let weeklyTotalHours = 19.5; // 8 + 7.5 + 4
const weeklyLimit = 48;

// Danh sách ngày lễ
const holidays = ['2026-01-01', '2026-04-30', '2026-05-01', '2026-09-02', '2026-12-25'];
function confirmAction(message, onConfirm) {
    const confirmed = confirm(message);
    if (confirmed) onConfirm();
    else showToast('Đã hủy thao tác', 'info');
}
// ==================== HÀM TIỆN ÍCH ====================
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-5 right-5 z-50 px-4 py-2 rounded-md shadow-lg text-white ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'}`;
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function calculateBusinessDays(start, end) {
    if (!start || !end) return 0;
    let startDate = new Date(start), endDate = new Date(end);
    if (startDate > endDate) return 0;
    let count = 0, current = new Date(startDate);
    while (current <= endDate) {
        const dayOfWeek = current.getDay();
        const dateStr = current.toISOString().slice(0, 10);
        if (dayOfWeek !== 0 && !holidays.includes(dateStr)) count++;
        current.setDate(current.getDate() + 1);
    }
    return count;
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('vi-VN');
}

// ==================== DASHBOARD ====================
function renderDashboard() {
    // 1. Hiển thị Skeleton Loading khi tải dữ liệu (NFR03 - UX)
    const container = document.getElementById('appContent');
    container.innerHTML = `
        <div class="p-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                ${Array(4).fill().map(() => `
                    <div class="bg-white rounded-lg p-5 shadow-sm">
                        <div class="skeleton h-8 w-24 mb-2"></div>
                        <div class="skeleton h-12 w-16"></div>
                        <div class="skeleton h-4 w-32 mt-3"></div>
                    </div>
                `).join('')}
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div class="bg-white rounded-lg p-5"><div class="skeleton h-64 w-full"></div></div>
                <div class="bg-white rounded-lg p-5"><div class="skeleton h-64 w-full"></div></div>
            </div>
            <div class="bg-white rounded-lg p-5"><div class="skeleton h-48 w-full"></div></div>
        </div>
    `;

    // 2. Mô phỏng loading (thực tế sẽ là API call)
    setTimeout(() => {
        const data = currentRole === 'admin' ? fullData : managerData;

        container.innerHTML = `
            <div class="header-bar">
                <div><h1>Bảng điều khiển</h1><p class="text-small mt-0.5">Tổng quan nhân sự & cảnh báo</p></div>
                <div class="flex items-center gap-4">
                    <select id="roleSelect" class="border border-gray-300 rounded-md text-sm py-1.5 px-3">
                        <option value="admin" ${currentRole === 'admin' ? 'selected' : ''}>HR Admin (Toàn công ty)</option>
                        <option value="manager" ${currentRole === 'manager' ? 'selected' : ''}>Manager (Chỉ phòng Kỹ thuật)</option>
                    </select>
                    <i class="fas fa-bell text-gray-500 text-lg cursor-pointer hover:text-[#1677FF]" id="notificationIcon"></i>
                    <button id="refreshBtn" class="btn-default text-sm flex items-center gap-1"><i class="fas fa-sync-alt"></i> Làm mới</button>
                </div>
            </div>
            <div class="p-6">
                <!-- 4 KPI Cards -->
                <div id="summaryCardsContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer" data-view="employee">
                        <div class="flex justify-between items-start">
                            <div><p class="text-small text-gray-500 uppercase tracking-wide">Tổng nhân viên</p><p class="text-3xl font-bold text-[#262626] mt-1">${data.summary.totalEmployees}</p></div>
                            <div class="w-10 h-10 rounded-full bg-[#E6F7FF] flex items-center justify-center text-[#1677FF] text-xl"><i class="fas fa-users"></i></div>
                        </div>
                        <div class="mt-3 text-small"><span class="text-green-600"><i class="fas fa-arrow-up"></i> +8%</span><span class="text-gray-400 ml-2">so với tháng trước</span></div>
                    </div>
                    <div class="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer" data-view="contracts">
                        <div class="flex justify-between items-start">
                            <div><p class="text-small text-gray-500 uppercase tracking-wide">Hợp đồng sắp hết</p><p class="text-3xl font-bold text-[#FAAD14] mt-1">${data.summary.expiringContracts}</p></div>
                            <div class="w-10 h-10 rounded-full bg-[#FFF7E6] flex items-center justify-center text-[#FAAD14] text-xl"><i class="fas fa-file-contract"></i></div>
                        </div>
                        <div class="mt-3 text-small"><span class="text-orange-600">⚠️ Cần xử lý trong 30 ngày</span></div>
                    </div>
                    <div class="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer" data-view="timeoff">
                        <div class="flex justify-between items-start">
                            <div><p class="text-small text-gray-500 uppercase tracking-wide">Đơn nghỉ chờ duyệt</p><p class="text-3xl font-bold text-[#FAAD14] mt-1">${data.summary.pendingLeaves}</p></div>
                            <div class="w-10 h-10 rounded-full bg-[#FFF7E6] flex items-center justify-center text-[#FAAD14] text-xl"><i class="fas fa-calendar-check"></i></div>
                        </div>
                        <div class="mt-3 text-small"><a href="#" class="link-view-all" data-view="timeoff">Xem danh sách →</a></div>
                    </div>
                    <div class="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                        <div class="flex justify-between items-start">
                            <div><p class="text-small text-gray-500 uppercase tracking-wide">Hoàn thành đào tạo</p><p class="text-3xl font-bold text-[#52C41A] mt-1">${data.summary.trainingCompletion}%</p></div>
                            <div class="w-10 h-10 rounded-full bg-[#F6FFED] flex items-center justify-center text-[#52C41A] text-xl"><i class="fas fa-graduation-cap"></i></div>
                        </div>
                        <div class="mt-3 text-small"><span class="text-green-600"><i class="fas fa-chart-line"></i> +12%</span><span class="text-gray-400 ml-2">so với quý trước</span></div>
                    </div>
                </div>
                
                <!-- Chart & Pending Leaves -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                        <div class="flex justify-between items-center mb-4">
                            <h2>📊 Phân bố nhân viên theo phòng ban</h2>
                            <button id="exportChartBtn" class="btn-outline text-xs py-1 px-2"><i class="fas fa-download"></i> Xuất</button>
                        </div>
                        <canvas id="deptChart" width="400" height="250" style="max-height: 250px; width: 100%;"></canvas>
                    </div>
                    <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                        <div class="flex justify-between items-center mb-3">
                            <h2>📋 Đơn nghỉ chờ duyệt</h2>
                            <a href="#" class="link-view-all text-sm" data-view="timeoff">Xem tất cả <i class="fas fa-chevron-right ml-1 text-xs"></i></a>
                        </div>
                        <div id="pendingLeavesTable" class="overflow-x-auto"></div>
                    </div>
                </div>
                
                <!-- Expiring Contracts -->
                <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                    <div class="flex justify-between items-center mb-4">
                        <div class="flex items-center gap-2"><i class="fas fa-exclamation-triangle text-[#FAAD14] text-xl"></i><h2>⚠️ Hợp đồng sắp hết hạn (≤30 ngày)</h2></div>
                        <a href="#" class="link-view-all" data-view="contracts">Xem tất cả →</a>
                    </div>
                    <div id="contractsList" class="space-y-3"></div>
                </div>
            </div>
        `;

        // 3. Render bảng đơn nghỉ chờ duyệt
        const pendingContainer = document.getElementById('pendingLeavesTable');
        if (pendingContainer) {
            if (data.pendingLeaves.length === 0) {
                pendingContainer.innerHTML = '<div class="text-center py-8 text-gray-400"><i class="fas fa-check-circle text-green-500 text-2xl mb-2 block"></i>Không có đơn chờ duyệt</div>';
            } else {
                pendingContainer.innerHTML = `
                    <table class="w-full data-table">
                        <thead class="border-b border-gray-200"><tr><th class="table-header py-3 px-2">Nhân viên</th><th class="table-header py-3 px-2">Loại nghỉ</th><th class="table-header py-3 px-2">Ngày</th><th class="table-header py-3 px-2">Số ngày</th><th class="table-header py-3 px-2"></th></tr></thead>
                        <tbody>${data.pendingLeaves.map(l => `
                            <tr><td class="py-3 px-2 text-body">${l.employee}</td>
                            <td class="py-3 px-2"><span class="badge-warning"><i class="fas fa-clock mr-1"></i>${l.type}</span></td>
                            <td class="py-3 px-2 text-body">${l.start} - ${l.end}</td>
                            <td class="py-3 px-2 text-body font-semibold">${l.days}</td>
                            <td class="py-3 px-2"><button class="btn-primary text-xs py-1 px-3 approve-btn" data-id="${l.id}" data-info="${l.employee} - ${l.type} (${l.days} ngày)">📝 Duyệt</button></td>
                        </tr>`).join('')}</tbody>
                    </table>
                `;
                document.querySelectorAll('.approve-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        openApproveModal(btn.dataset.id, btn.dataset.info);
                    });
                });
            }
        }

        // 4. Render hợp đồng sắp hết hạn
        const contractsContainer = document.getElementById('contractsList');
        if (contractsContainer) {
            const filtered = data.expiringContracts.filter(c => c.daysLeft <= 30);
            if (filtered.length === 0) {
                contractsContainer.innerHTML = '<div class="text-center py-4 text-gray-400"><i class="fas fa-check-circle text-green-500"></i> Không có hợp đồng nào sắp hết hạn</div>';
            } else {
                contractsContainer.innerHTML = filtered.map(c => `
                    <div class="p-3 border border-orange-100 rounded-lg bg-orange-50 flex justify-between items-center hover:shadow-sm transition-shadow">
                        <div>
                            <div class="flex items-center gap-2">
                                <p class="font-medium">${c.employee}</p>
                                <span class="text-xs text-gray-400">${c.contractCode}</span>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">
                                <i class="far fa-calendar-alt mr-1"></i>Ngày kết thúc: 
                                <span class="font-semibold text-[#FAAD14]">${c.endDate}</span> 
                                <span class="text-red-500">(còn ${c.daysLeft} ngày)</span>
                            </p>
                        </div>
                        <button class="btn-default text-sm py-1 px-3 renew-contract" data-code="${c.contractCode}" data-employee="${c.employee}">
                            <i class="fas fa-file-signature mr-1"></i>Gia hạn
                        </button>
                    </div>
                `).join('');
                document.querySelectorAll('.renew-contract').forEach(btn => {
                    btn.addEventListener('click', () => {
                        confirmAction(`Xác nhận gia hạn hợp đồng cho ${btn.dataset.employee}?`, () => {
                            showToast(`Đã gửi yêu cầu gia hạn hợp đồng ${btn.dataset.code}`, 'success');
                        });
                    });
                });
            }
        }

        // 5. Khởi tạo biểu đồ
        setTimeout(() => {
            const canvas = document.getElementById('deptChart');
            if (canvas) {
                if (chartInstance) chartInstance.destroy();
                chartInstance = new Chart(canvas, {
                    type: 'pie',
                    data: {
                        labels: data.departmentStats.map(d => `${d.name} (${d.count})`),
                        datasets: [{
                            data: data.departmentStats.map(d => d.count),
                            backgroundColor: data.departmentStats.map(d => d.color),
                            borderWidth: 0,
                            hoverOffset: 10
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            legend: { position: 'bottom', labels: { font: { size: 11 }, boxWidth: 10, padding: 15 } },
                            tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${ctx.raw} nhân viên (${Math.round(ctx.raw / data.summary.totalEmployees * 100)}%)` } }
                        }
                    }
                });
            }
        }, 50);

        // 6. Gán sự kiện
        document.getElementById('roleSelect')?.addEventListener('change', (e) => {
            currentRole = e.target.value;
            document.getElementById('userRoleDisplay').innerText = currentRole === 'admin' ? 'HR Admin' : 'Manager (Kỹ thuật)';
            renderDashboard();
        });
        document.getElementById('refreshBtn')?.addEventListener('click', () => {
            showToast('Đang làm mới dữ liệu...', 'info');
            renderDashboard();
        });
        document.getElementById('notificationIcon')?.addEventListener('click', () => {
            showToast('📢 Bạn có 3 thông báo mới:\n- 2 đơn nghỉ chờ duyệt\n- 1 hợp đồng sắp hết hạn', 'info');
        });
        document.getElementById('exportChartBtn')?.addEventListener('click', () => {
            showToast('Đã xuất biểu đồ dưới dạng PNG', 'success');
        });

        // 7. Click vào card KPI để điều hướng
        document.querySelectorAll('#summaryCardsContainer .bg-white.cursor-pointer').forEach(card => {
            card.addEventListener('click', () => {
                const view = card.dataset.view;
                if (view) navigateTo(view);
            });
        });

        // 8. Gắn sự kiện cho tất cả [data-view]
        document.querySelectorAll('[data-view]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo(link.dataset.view);
            });
        });

    }, 300); // Kết thúc setTimeout loading
}

// ==================== HỒ SƠ NHÂN VIÊN ====================
function renderProfile() {
    const container = document.getElementById('appContent');
    const data = currentRole === 'admin' ? fullData : managerData;

    container.innerHTML = `
        <div class="header-bar">
            <div><h1>Hồ sơ nhân viên</h1><p class="text-small">Nguyễn Văn An - Kỹ thuật</p></div>
            <div><button id="toggleEditConfigBtn" class="btn-default text-sm">${profileEditingEnabled ? 'Tắt cho phép tự sửa' : 'Bật cho phép tự sửa'}</button></div>
        </div>
        <div class="p-6">
            <div class="smart-buttons" id="smartButtons"></div>
            <div class="bg-white p-5 rounded-lg">
                <div class="profile-tabs">
                    <div class="tab-buttons">
                        <div class="tab-btn active" data-tab="details">Chi tiết</div>
                        
                        <div class="tab-btn" data-tab="skills">Kỹ năng</div>
                        <div class="tab-btn" data-tab="experience">Kinh nghiệm</div>
                        <div class="tab-btn" data-tab="education">Bằng cấp</div>
                    </div>
                </div>
                <div class="tab-content" id="tabContent"></div>
                <div class="edit-mode-btn" id="editButtonContainer"></div>
                
            </div>
        </div>
    `;

    renderSmartButtons(data);
    renderTabContent('details');

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTabContent(btn.dataset.tab);
        });
    });

    document.getElementById('toggleEditConfigBtn')?.addEventListener('click', () => {
        profileEditingEnabled = !profileEditingEnabled;
        renderProfile();
        showToast(`Đã ${profileEditingEnabled ? 'bật' : 'tắt'} quyền tự chỉnh sửa`, 'success');
    });
}

function renderSmartButtons(data) {
    const container = document.getElementById('smartButtons');
    if (!container) return;

    const equipmentCount = data.equipment?.filter(e => e.status === 'Đang sử dụng').length || 0;
    const carsCount = data.cars?.filter(c => c.status === 'Đang sử dụng').length || 0;
    const pendingDocs = data.documents?.filter(d => d.status === 'pending').length || 0;
    const pendingAppraisals = data.appraisals?.filter(a => a.status === 'pending').length || 0;
    const activeContracts = data.contracts?.filter(c => c.status === 'Active').length || 0;

    container.innerHTML = `
        <div class="smart-card" data-view="timeoff"><div class="count" style="color:${currentLeaveRemainingDays >= 5 ? '#52C41A' : '#FAAD14'}">${currentLeaveRemainingDays}</div><div class="label">Time Off</div><div class="unit">ngày</div></div>
        <div class="smart-card" data-view="contracts"><div class="count" style="color:#52C41A">${activeContracts}</div><div class="label">Contracts</div><div class="unit">Active</div></div>
        <div class="smart-card" data-view="equipment"><div class="count" style="color:#1677FF">${equipmentCount}</div><div class="label">Equipment</div><div class="unit">thiết bị</div></div>
        <div class="smart-card" data-view="planning"><div class="count" style="color:#722ED1">${data.planningShifts?.length || 0}</div><div class="label">Planning</div><div class="unit">ca</div></div>
        <div class="smart-card" data-view="cars"><div class="count" style="color:#1677FF">${carsCount}</div><div class="label">Cars</div><div class="unit">xe</div></div>
        <div class="smart-card" data-view="courses"><div class="count" style="color:#FAAD14">2</div><div class="label">Courses</div><div class="unit">khóa</div></div>
        <div class="smart-card" data-view="documents"><div class="count" style="color:#FAAD14">${pendingDocs}</div><div class="label">Documents</div><div class="unit">chờ ký</div></div>
        <div class="smart-card" data-view="timesheets"><div class="count" style="color:#52C41A">${weeklyTotalHours}h/48h</div><div class="label">Timesheets</div></div>
        <div class="smart-card" data-view="appraisal"><div class="count" style="color:#FAAD14">${pendingAppraisals}</div><div class="label">Appraisal</div><div class="unit">chờ</div></div>
    `;

    document.querySelectorAll('.smart-card').forEach(card => {
        card.addEventListener('click', () => navigateTo(card.dataset.view));
    });
}

function renderTabContent(tabId) {
    const container = document.getElementById('tabContent');
    const isEditable = profileEditingEnabled && currentRole === 'admin';
    const disabled = !isEditable ? 'disabled' : '';

    if (tabId === 'details') {
        container.innerHTML = `
        <div class="form-row"><div class="form-field"><label>Họ tên</label><input type="text" value="Nguyễn Văn An" ${disabled}></div><div class="form-field"><label>Email</label><input type="email" value="nvan@plpsoft.com.vn" ${disabled}></div></div>
        <div class="form-row"><div class="form-field"><label>Số điện thoại</label><input type="text" value="0987654321" ${disabled}></div><div class="form-field"><label>Ngày sinh</label><input type="date" value="1990-05-15" ${disabled}></div></div>
        <div class="form-row"><div class="form-field"><label>Địa chỉ</label><input type="text" value="Số 1, Đường A, Quận B" ${disabled}></div><div class="form-field"><label>CMND/CCCD</label><input type="text" value="012345678901" ${disabled}></div></div>
        <div class="form-row"><div class="form-field"><label>Phòng ban</label><input type="text" value="Phòng Kỹ thuật" readonly ${disabled}></div><div class="form-field"><label>Chức vụ</label><input type="text" value="Nhân viên" readonly ${disabled}></div></div>
        
        <!-- BỔ SUNG: UPLOAD RESUME - THEO YÊU CẦU FR19 -->
        <div class="border-t pt-4 mt-4">
            <label class="font-medium block mb-2">📄 Sơ yếu lý lịch (Resume)</label>
            <div class="flex gap-2 items-center flex-wrap">
                <input type="file" id="resumeFile" accept=".pdf,.doc,.docx" class="border rounded p-1 text-sm">
                <button id="uploadResumeBtn" class="btn-primary text-sm py-1 px-3">Tải lên</button>
            </div>
            <p class="text-xs text-gray-400 mt-1">Hỗ trợ PDF, Word (tối đa 5MB)</p>
            <div id="resumeHistory" class="mt-2 text-sm">
                <p class="text-gray-500"><i class="fas fa-history"></i> Phiên bản hiện tại: CV_2026_v2.pdf</p>
                <p class="text-gray-400 text-xs">Lịch sử: v1 (10/01/2026) | v2 (15/03/2026)</p>
            </div>
        </div>
    `;

        // Gắn sự kiện cho nút upload resume
        const uploadBtn = document.getElementById('uploadResumeBtn');
        if (uploadBtn) {
            uploadBtn.addEventListener('click', () => {
                const fileInput = document.getElementById('resumeFile');
                const file = fileInput?.files[0];
                if (!file) {
                    showToast('Vui lòng chọn file PDF hoặc Word', 'error');
                    return;
                }
                if (file.size > 5 * 1024 * 1024) {
                    showToast('File vượt quá 5MB. Vui lòng chọn file nhỏ hơn.', 'error');
                    return;
                }
                const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                if (!validTypes.includes(file.type)) {
                    showToast('Chỉ hỗ trợ file PDF, DOC, DOCX', 'error');
                    return;
                }
                showToast(`Đã tải lên resume: ${file.name}`, 'success');
                // Cập nhật lịch sử phiên bản (demo)
                const historyDiv = document.getElementById('resumeHistory');
                if (historyDiv) {
                    const now = new Date();
                    const dateStr = now.toLocaleDateString('vi-VN');
                    historyDiv.innerHTML = `
                    <p class="text-gray-500"><i class="fas fa-history"></i> Phiên bản hiện tại: ${file.name}</p>
                    <p class="text-gray-400 text-xs">Lịch sử: CV_2026_v1.pdf | CV_2026_v2.pdf | ${file.name} (${dateStr})</p>
                `;
                }
            });
        }
    } else if (tabId === 'skills') {
        container.innerHTML = `
        <div class="space-y-3"><div class="flex justify-between items-center p-3 bg-gray-50 rounded"><span>C#</span><span class="font-semibold text-[#1677FF]">85%</span></div>
        <div class="flex justify-between items-center p-3 bg-gray-50 rounded"><span>ASP.NET Core</span><span class="font-semibold text-[#1677FF]">70%</span></div>
        <div class="flex justify-between items-center p-3 bg-gray-50 rounded"><span>SQL</span><span class="font-semibold text-[#1677FF]">60%</span></div>
        <button class="btn-default mt-3" ${disabled}>+ Thêm kỹ năng</button></div>
    `;
    } else if (tabId === 'experience') {
        container.innerHTML = `
        <div class="border-l-2 border-[#1677FF] pl-4 py-2"><p class="font-medium">Công ty ABC</p><p class="text-small text-gray-500">Chuyên viên phát triển phần mềm | 2019 - 2024</p><p class="text-small mt-1">Phát triển và bảo trì hệ thống ERP nội bộ</p></div>
        <button class="btn-default mt-3" ${disabled}>+ Thêm kinh nghiệm</button>
    `;
    } else if (tabId === 'education') {
        container.innerHTML = `
        <div class="border-l-2 border-[#1677FF] pl-4 py-2"><p class="font-medium">Đại học Bách khoa Hà Nội</p><p class="text-small text-gray-500">Kỹ sư Công nghệ thông tin | 2014 - 2019</p><p class="text-small mt-1">Chuyên ngành Khoa học máy tính</p></div>
        <button class="btn-default mt-3" ${disabled}>+ Thêm bằng cấp</button>
    `;
    }

    const editBtnContainer = document.getElementById('editButtonContainer');
    if (editBtnContainer) {
        editBtnContainer.innerHTML = isEditable ? `<button id="saveProfileBtn" class="btn-primary">Lưu thay đổi</button>` : '';
        if (isEditable) {
            document.getElementById('saveProfileBtn')?.addEventListener('click', () => showToast('Đã lưu thay đổi hồ sơ', 'success'));
        }
    }

}

// ==================== QUẢN LÝ THIẾT BỊ ====================
function renderEquipment() {
    const container = document.getElementById('appContent');
    const data = currentRole === 'admin' ? fullData : managerData;

    container.innerHTML = `
        <div class="header-bar"><div><h1>Quản lý thiết bị</h1><p class="text-small">Thiết bị đang cấp phát</p></div><button id="reportEquipBtn" class="btn-danger text-sm"><i class="fas fa-exclamation-triangle"></i> Báo hỏng</button></div>
        <div class="p-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="equipmentList"></div></div>
    `;

    const equipDiv = document.getElementById('equipmentList');
    if (equipDiv) {
        equipDiv.innerHTML = data.equipment.map(e => `
            <div class="border rounded-lg p-4 ${e.status === 'Báo hỏng' ? 'bg-red-50 border-red-200' : 'bg-white'}">
                <div class="flex justify-between items-start">
                    <i class="fas fa-${e.type === 'Laptop' ? 'laptop' : e.type === 'Monitor' ? 'desktop' : 'keyboard'} text-2xl text-gray-400"></i>
                    <div class="text-right"><span class="${e.status === 'Đang sử dụng' ? 'badge-success' : 'badge-danger'}">${e.status}</span></div>
                </div>
                <p class="font-medium mt-2">${e.name}</p>
                <p class="text-small text-gray-500">Serial: ${e.serial}</p>
                <p class="text-small text-gray-500">Ngày cấp: ${e.assignedDate}</p>
                ${e.status === 'Báo hỏng' ? '<div class="mt-2 text-red-600 text-sm"><i class="fas fa-tools"></i> Đang chờ xử lý...</div>' : ''}
            </div>
        `).join('');
    }

    document.getElementById('reportEquipBtn')?.addEventListener('click', () => {
        const modal = document.getElementById('reportEquipmentModal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
    });
}

// ==================== QUẢN LÝ XE ====================
function renderCars() {
    const container = document.getElementById('appContent');
    const data = currentRole === 'admin' ? fullData : managerData;
    const today = new Date();

    container.innerHTML = `
        <div class="header-bar"><div><h1>Quản lý phương tiện</h1><p class="text-small">Xe công ty được cấp</p></div><button id="maintainCarBtn" class="btn-default text-sm"><i class="fas fa-tools"></i> Yêu cầu bảo trì</button></div>
        <div class="p-6"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="carsList"></div></div>
    `;

    const carsDiv = document.getElementById('carsList');
    if (carsDiv) {
        carsDiv.innerHTML = data.cars.map(car => {
            const inspExpiry = new Date(car.inspectionExpiry);
            const daysToInsp = Math.ceil((inspExpiry - today) / (1000 * 60 * 60 * 24));
            let warnClass = '', warnText = '';
            if (daysToInsp <= 0) { warnClass = 'car-danger'; warnText = 'Hết hạn đăng kiểm'; }
            else if (daysToInsp <= 30) { warnClass = 'car-warning'; warnText = `Sắp hết hạn (còn ${daysToInsp} ngày)`; }
            else { warnText = 'Còn hạn'; }

            return `
                <div class="car-item ${warnClass} border rounded-lg p-4 bg-white">
                    <div class="flex justify-between"><i class="fas fa-car text-2xl text-[#1677FF]"></i><span class="${car.status === 'Đang sử dụng' ? 'badge-success' : 'badge-warning'}">${car.status}</span></div>
                    <p class="font-medium text-lg mt-2">${car.plate}</p>
                    <p class="text-small text-gray-500">${car.brand} ${car.model} - ${car.color}</p>
                    <div class="mt-3 text-small"><span class="text-gray-500">Đăng kiểm:</span> <span class="${daysToInsp <= 30 ? 'text-red-500 font-semibold' : ''}">${car.inspectionExpiry} (${warnText})</span></div>
                    <div class="mt-1 text-small"><span class="text-gray-500">Bảo hiểm:</span> ${car.insuranceExpiry}</div>
                    <div class="mt-3 flex gap-2"><button class="btn-outline text-sm py-1 px-3 car-detail" data-id="${car.id}">Chi tiết</button><button class="btn-default text-sm py-1 px-3 car-report" data-id="${car.id}">Báo bảo trì</button></div>
                </div>
            `;
        }).join('');
    }

    document.getElementById('maintainCarBtn')?.addEventListener('click', () => showToast('Chức năng yêu cầu bảo trì đang phát triển', 'info'));
    document.querySelectorAll('.car-detail').forEach(btn => btn.addEventListener('click', () => showToast('Xem chi tiết xe', 'info')));
    document.querySelectorAll('.car-report').forEach(btn => btn.addEventListener('click', () => showToast('Đã gửi yêu cầu bảo trì', 'success')));
}

// ==================== PLANNING ====================
function renderPlanning() {
    const container = document.getElementById('appContent');
    const data = currentRole === 'admin' ? fullData : managerData;
    const days = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];

    container.innerHTML = `
        <div class="header-bar"><div><h1>Lịch làm việc & Đổi ca</h1><p class="text-small">Planning - Quản lý ca trực</p></div><button id="swapShiftBtn" class="btn-primary text-sm"><i class="fas fa-exchange-alt"></i> Yêu cầu đổi ca</button></div>
        <div class="p-6">
            <div class="bg-white rounded-lg shadow-sm p-5">
                <div class="planning-calendar" id="planningCalendar"></div>
                <div class="mt-6"><h3 class="font-medium mb-3">Yêu cầu đổi ca đang chờ</h3><div id="swapRequestsList" class="space-y-2"></div></div>
            </div>
        </div>
    `;

    const calendarDiv = document.getElementById('planningCalendar');
    if (calendarDiv) {
        calendarDiv.innerHTML = days.map((day, idx) => {
            const shifts = data.planningShifts.filter(s => s.day === idx + 1);
            const shiftHtml = shifts.map(s => `
                <div class="text-xs p-1 mt-1 rounded ${s.type === 'office' ? 'bg-blue-100' : s.type === 'remote' ? 'bg-green-100' : 'bg-yellow-100'}">
                    ${s.shiftName}<br><span class="text-gray-500">${s.role}</span>
                </div>
            `).join('');
            return `<div class="planning-day"><div class="font-medium text-sm">${day}</div>${shiftHtml || '<div class="text-xs text-gray-400 mt-2">Không có ca</div>'}</div>`;
        }).join('');
    }

    const swapListDiv = document.getElementById('swapRequestsList');
    if (swapListDiv && data.swapRequests) {
        swapListDiv.innerHTML = data.swapRequests.map(sr => `
            <div class="flex justify-between items-center p-3 bg-gray-50 rounded">
                <div><span class="font-medium">${sr.requester}</span> → <span class="text-gray-500">${sr.target}</span><p class="text-xs text-gray-400">Ngày gửi: ${sr.createdDate}</p></div>
                <span class="badge-warning">Chờ phê duyệt</span>
            </div>
        `).join('');
    }

    document.getElementById('swapShiftBtn')?.addEventListener('click', () => {
        const modal = document.getElementById('swapShiftModal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
    });
}

// ==================== HỢP ĐỒNG ====================
function renderContracts() {
    const container = document.getElementById('appContent');
    const data = currentRole === 'admin' ? fullData : managerData;

    container.innerHTML = `
        <div class="header-bar">
            <div><h1>Quản lý hợp đồng lao động</h1><p class="text-small">Danh sách hợp đồng của nhân viên</p></div>
            <div class="flex gap-2">
                <button id="createContractBtn" class="btn-primary text-sm"><i class="fas fa-plus"></i> Tạo hợp đồng</button>
                <button id="createFromTemplateBtn" class="btn-outline text-sm"><i class="fas fa-file-alt"></i> Từ mẫu</button>
            </div>
        </div>
        <div class="p-6">
            <div class="bg-white rounded-lg shadow-sm p-5">
                <div class="flex gap-4 mb-4 border-b">
                    <button class="contract-tab active pb-2" data-contract-tab="active">Đang hiệu lực</button>
                    <button class="contract-tab pb-2" data-contract-tab="draft">Bản nháp</button>
                    <button class="contract-tab pb-2" data-contract-tab="expired">Đã hết hạn</button>
                </div>
                <div class="space-y-3" id="contractsListFull"></div>
            </div>
        </div>
    `;

    // Tab switching logic
    document.querySelectorAll('.contract-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.contract-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.dataset.contractTab;
            const filtered = data.contracts.filter(c =>
                filter === 'active' ? c.status === 'Active' :
                    filter === 'draft' ? c.status === 'Draft' : c.status === 'Expired'
            );
            renderContractList(filtered);
        });
    });

    function renderContractList(contracts) {
        const listDiv = document.getElementById('contractsListFull');
        if (!listDiv) return;
        listDiv.innerHTML = contracts.map(c => `
            <div class="border rounded-lg p-4 ${c.status === 'Active' ? 'border-green-200 bg-green-50' : c.status === 'Expired' ? 'border-red-200 bg-red-50' : 'border-gray-200'}">
                <div class="flex justify-between items-start">
                    <div><p class="font-medium">${c.code} - ${c.employee}</p><p class="text-small text-gray-500">Loại: ${c.type} | ${c.startDate} → ${c.endDate || 'Không thời hạn'}</p></div>
                    <div><span class="${c.status === 'Active' ? 'badge-success' : c.status === 'Expired' ? 'badge-danger' : 'badge-info'}">${c.status === 'Active' ? '● Đang hiệu lực' : c.status === 'Expired' ? '● Đã hết hạn' : '● Bản nháp'}</span></div>
                </div>
                <div class="mt-3 flex gap-2"><button class="btn-default text-sm py-1 px-3 contract-detail" data-code="${c.code}">Xem chi tiết</button></div>
            </div>
        `).join('');
    }

    renderContractList(data.contracts.filter(c => c.status === 'Active'));

    document.getElementById('createContractBtn')?.addEventListener('click', () => showToast('Chức năng tạo hợp đồng đang phát triển', 'info'));
    document.getElementById('createFromTemplateBtn')?.addEventListener('click', () => {
        const template = prompt('Chọn mẫu hợp đồng:\n1. Mẫu thử việc\n2. Mẫu có thời hạn\n3. Mẫu không thời hạn');
        if (template) showToast(`Đã tạo hợp đồng mới từ mẫu số ${template}`, 'success');
    });
}

// ==================== KÝ SỐ ====================
function renderDocuments() {
    const container = document.getElementById('appContent');
    const data = currentRole === 'admin' ? fullData : managerData;
    const pendingDocs = data.documents.filter(d => d.status === 'pending');
    const signedDocs = data.documents.filter(d => d.status === 'signed');

    container.innerHTML = `
        <div class="header-bar"><div><h1>Ký số tài liệu điện tử</h1><p class="text-small">Tài liệu chờ ký và đã ký</p></div></div>
        <div class="p-6">
            <div class="bg-white rounded-lg shadow-sm p-5">
                <div class="tab-buttons border-b mb-4">
                    <div class="tab-btn active" data-doctab="pending">Chờ ký (${pendingDocs.length})</div>
                    <div class="tab-btn" data-doctab="signed">Đã ký (${signedDocs.length})</div>
                </div>
                <div id="documentsContainer"></div>
            </div>
        </div>
    `;

    renderDocumentsTab('pending');

    document.querySelectorAll('[data-doctab]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-doctab]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderDocumentsTab(btn.dataset.doctab);
        });
    });
}

function renderDocumentsTab(tab) {
    const data = currentRole === 'admin' ? fullData : managerData;
    const filtered = data.documents.filter(d => d.status === (tab === 'pending' ? 'pending' : 'signed'));
    const container = document.getElementById('documentsContainer');

    if (container) {
        if (filtered.length === 0) {
            container.innerHTML = '<div class="text-center py-8 text-gray-400">Không có tài liệu nào</div>';
        } else {
            container.innerHTML = filtered.map(doc => `
                <div class="flex justify-between items-center border-b pb-3 mb-3">
                    <div><p class="font-medium">${doc.title}</p><p class="text-small text-gray-500">Người gửi: ${doc.sender} | Hạn: ${doc.expiry}</p></div>
                    ${tab === 'pending' ? `<button class="btn-primary text-sm py-1 px-3 sign-doc-btn" data-title="${doc.title}" data-url="${doc.pdfUrl}">Ký số</button>` : '<span class="badge-success">Đã ký</span>'}
                </div>
            `).join('');

            document.querySelectorAll('.sign-doc-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const modal = document.getElementById('signDocumentModal');
                    if (modal) {
                        document.getElementById('docInfo').innerHTML = `<strong>${btn.dataset.title}</strong><br>Hạn ký: 7 ngày kể từ ngày gửi`;
                        modal.classList.remove('hidden');
                        modal.classList.add('flex');

                        const checkbox = document.getElementById('confirmCheckbox');
                        const signBtn = document.getElementById('approveSignBtn');
                        if (checkbox) {
                            checkbox.checked = false;
                            checkbox.onchange = (e) => { if (signBtn) signBtn.disabled = !e.target.checked; };
                        }
                        if (signBtn) {
                            signBtn.disabled = true;
                            signBtn.onclick = () => {
                                showToast('Ký số thành công. File đã được khóa chỉ đọc.', 'success');
                                modal.classList.add('hidden');
                            };
                        }
                        document.getElementById('rejectSignBtn').onclick = () => {
                            const reason = prompt('Nhập lý do từ chối:');
                            if (reason) showToast(`Đã từ chối tài liệu với lý do: ${reason}`, 'info');
                            modal.classList.add('hidden');
                        };
                    }
                });
            });
        }
    }
}

// ==================== ĐÁNH GIÁ ====================
function renderAppraisal() {
    const container = document.getElementById('appContent');
    const data = currentRole === 'admin' ? fullData : managerData;

    container.innerHTML = `
        <div class="header-bar"><div><h1>Đánh giá hiệu suất</h1><p class="text-small">Yêu cầu và kết quả đánh giá</p></div><button id="requestAppraisalBtn" class="btn-primary text-sm"><i class="fas fa-plus"></i> Yêu cầu đánh giá</button></div>
        <div class="p-6"><div class="space-y-4" id="appraisalsList"></div></div>
    `;

    const listDiv = document.getElementById('appraisalsList');
    if (listDiv && data.appraisals) {
        listDiv.innerHTML = data.appraisals.map(a => `
            <div class="border rounded-lg p-4 ${a.status === 'pending' ? 'border-yellow-200 bg-yellow-50' : 'border-green-200 bg-green-50'}">
                <div class="flex justify-between items-start">
                    <div><p class="font-medium">${a.employee} - ${a.type}</p><p class="text-small text-gray-500">Người đánh giá: ${a.reviewer} | Hạn: ${a.dueDate}</p></div>
                    <div><span class="${a.status === 'pending' ? 'badge-warning' : 'badge-success'}">${a.status === 'pending' ? 'Chờ đánh giá' : `Đã hoàn thành - Điểm: ${a.score}/5`}</span></div>
                </div>
                ${a.status === 'pending' ? '<div class="mt-3"><button class="btn-primary text-sm py-1 px-3 appraisal-review">Đánh giá</button></div>' : ''}
            </div>
        `).join('');
    }

    document.getElementById('requestAppraisalBtn')?.addEventListener('click', () => {
        const modal = document.getElementById('addAppraisalModal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
    });
    document.querySelectorAll('.appraisal-review').forEach(btn => btn.addEventListener('click', () => showToast('Chức năng đánh giá đang phát triển', 'info')));
}

// ==================== TIMESHEETS ====================
function renderTimesheets() {
    const container = document.getElementById('appContent');
    const data = currentRole === 'admin' ? fullData : managerData;
    const totalThisWeek = data.timesheetEntries.reduce((sum, e) => sum + e.hours, 0);

    container.innerHTML = `
        <div class="header-bar"><div><h1>Bảng chấm công</h1><p class="text-small">Timesheets - Tuần hiện tại: ${totalThisWeek}h / ${weeklyLimit}h</p></div><button id="addTimesheetBtn" class="btn-primary text-sm"><i class="fas fa-plus"></i> Thêm giờ</button></div>
        <div class="p-6"><div class="bg-white rounded-lg shadow-sm p-5"><div class="overflow-x-auto"><table class="data-grid w-full"><thead><tr><th>Ngày</th><th>Dự án</th><th>Số giờ</th><th>Mô tả</th><th>Trạng thái</th><th></th></tr></thead><tbody id="timesheetTableBody"></tbody></table></div></div></div>
    `;

    const tbody = document.getElementById('timesheetTableBody');
    if (tbody && data.timesheetEntries) {
        tbody.innerHTML = data.timesheetEntries.map(entry => `
            <tr>
                <td>${formatDate(entry.date)}</td><td>${entry.project}</td><td>${entry.hours}h</td><td>${entry.description}</td>
                <td><span class="${entry.status === 'approved' ? 'badge-success' : 'badge-warning'}">${entry.status === 'approved' ? 'Đã duyệt' : 'Chờ duyệt'}</span></td>
                <td>${entry.status === 'pending' ? '<button class="text-[#1677FF] text-sm edit-timesheet">Sửa</button>' : ''}</td>
            </tr>
        `).join('');
    }

    document.getElementById('addTimesheetBtn')?.addEventListener('click', () => {
        const modal = document.getElementById('addTimesheetModal');
        if (modal) {
            document.getElementById('timesheetDate').value = new Date().toISOString().slice(0, 10);
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
    });
}
function rejectLeave() {
    confirmAction('Bạn có chắc chắn muốn từ chối đơn nghỉ phép này?', () => {
        document.getElementById('approveModal').classList.add('hidden');
        const rejectModal = document.getElementById('rejectReasonModal');
        if (rejectModal) {
            document.getElementById('rejectReason').value = '';
            rejectModal.classList.remove('hidden');
            rejectModal.classList.add('flex');
        }
    });
}
// ==================== ĐÀO TẠO ====================
function renderCourses() {
    const container = document.getElementById('appContent');
    const isAdmin = currentRole === 'admin';

    container.innerHTML = `
        <div class="header-bar">
            <div><h1>Đào tạo & Phát triển</h1><p class="text-small">Khóa học eLearning</p></div>
            ${isAdmin ? '<button id="assignCourseBtn" class="btn-primary text-sm"><i class="fas fa-plus"></i> Gán khóa học</button>' : ''}
        </div>
        <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="coursesList">
                <div class="bg-white rounded-lg p-4 border"><div class="flex justify-between"><i class="fas fa-book-open text-2xl text-[#1677FF]"></i><span class="badge-warning">50%</span></div><h3 class="font-medium mt-2">React Advanced</h3><p class="text-small text-gray-500">Hoàn thành 5/10 bài</p><div class="w-full bg-gray-200 rounded-full h-2 mt-2"><div class="bg-[#1677FF] h-2 rounded-full" style="width:50%"></div></div></div>
                <div class="bg-white rounded-lg p-4 border"><div class="flex justify-between"><i class="fas fa-code text-2xl text-[#1677FF]"></i><span class="badge-success">100%</span></div><h3 class="font-medium mt-2">ASP.NET Core Master</h3><p class="text-small text-gray-500">Đã hoàn thành</p><div class="w-full bg-gray-200 rounded-full h-2 mt-2"><div class="bg-[#52C41A] h-2 rounded-full" style="width:100%"></div></div></div>
            </div>
            ${isAdmin ? '<div class="mt-6 bg-white rounded-lg p-4 border"><h3 class="font-medium mb-3">Nhân viên đang học</h3><div class="space-y-2" id="assignedEmployees"></div></div>' : ''}
        </div>
    `;

    if (isAdmin) {
        const assignedDiv = document.getElementById('assignedEmployees');
        if (assignedDiv) {
            assignedDiv.innerHTML = `
                <div class="flex justify-between items-center p-2 border-b"><span>Nguyễn Văn An</span><span class="badge-info">React Advanced (50%)</span><button class="text-xs text-[#1677FF]">Xem</button></div>
                <div class="flex justify-between items-center p-2 border-b"><span>Trần Thị Bích</span><span class="badge-success">ASP.NET Core (100%)</span><button class="text-xs text-[#1677FF]">Xem</button></div>
            `;
        }
        document.getElementById('assignCourseBtn')?.addEventListener('click', () => {
            const course = prompt('Nhập tên khóa học muốn gán:');
            const employee = prompt('Nhập tên nhân viên:');
            if (course && employee) showToast(`Đã gán khóa học "${course}" cho ${employee}`, 'success');
        });
    }
}

// ==================== NGHỈ PHÉP ====================
function renderTimeOff() {
    const container = document.getElementById('appContent');
    const data = currentRole === 'admin' ? fullData : managerData;

    container.innerHTML = `
        <div class="header-bar"><div><h1>Quản lý nghỉ phép</h1><p class="text-small">Danh sách đơn nghỉ</p></div><button id="newLeaveBtn" class="btn-primary text-sm"><i class="fas fa-plus"></i> Tạo đơn</button></div>
        <div class="p-6"><div class="bg-white rounded-lg shadow-sm p-5"><div class="space-y-3" id="allLeavesList"></div></div></div>
    `;

    const listDiv = document.getElementById('allLeavesList');
    if (listDiv && data.pendingLeaves) {
        listDiv.innerHTML = data.pendingLeaves.map(l => `
            <div class="flex justify-between items-center p-4 border rounded-lg">
                <div><p class="font-medium">${l.employee}</p><p class="text-small text-gray-500">${l.type} | ${l.start} - ${l.end} (${l.days} ngày)</p></div>
                <button class="btn-primary text-sm py-1 px-3 approve-btn" data-id="${l.id}" data-info="${l.employee} - ${l.type}">Duyệt</button>
            </div>
        `).join('');

        document.querySelectorAll('.approve-btn').forEach(btn => {
            btn.addEventListener('click', () => openApproveModal(btn.dataset.id, btn.dataset.info));
        });
    }

    document.getElementById('newLeaveBtn')?.addEventListener('click', () => {
        const modal = document.getElementById('createLeaveModal');
        if (modal) {
            document.getElementById('startDate').value = '';
            document.getElementById('endDate').value = '';
            document.getElementById('calculatedDays').innerText = '0';
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
    });
}

// ==================== CẤU HÌNH ====================
function renderConfig() {
    const container = document.getElementById('appContent');

    container.innerHTML = `
        <div class="header-bar"><div><h1>Cấu hình hệ thống</h1><p class="text-small">Quản trị cài đặt</p></div></div>
        <div class="p-6"><div class="bg-white rounded-lg shadow-sm p-5 space-y-4">
            <div class="flex justify-between items-center p-3 border-b"><div><h3 class="font-medium">Employee Editing</h3><p class="text-small text-gray-500">Cho phép nhân viên tự chỉnh sửa thông tin cá nhân</p></div><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" id="editToggle" class="sr-only peer" ${profileEditingEnabled ? 'checked' : ''}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-[#1677FF] after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div></label></div>
            <div class="flex justify-between items-center p-3 border-b"><div><h3 class="font-medium">Giới hạn đổi ca/tháng</h3><p class="text-small text-gray-500">Số lần đổi ca tối đa mỗi tháng</p></div><input type="number" value="4" class="border rounded px-2 py-1 w-20"></div>
            <div class="flex justify-between items-center p-3 border-b"><div><h3 class="font-medium">Hạn ký tài liệu</h3><p class="text-small text-gray-500">Số ngày trước khi tài liệu hết hạn</p></div><input type="number" value="7" class="border rounded px-2 py-1 w-20"></div>
            <button class="btn-primary mt-4" id="saveConfigBtn">Lưu cấu hình</button>
        </div></div>
    `;

    document.getElementById('editToggle')?.addEventListener('change', (e) => {
        profileEditingEnabled = e.target.checked;
        showToast(`Đã ${profileEditingEnabled ? 'bật' : 'tắt'} quyền tự chỉnh sửa`, 'success');
    });
    document.getElementById('saveConfigBtn')?.addEventListener('click', () => showToast('Đã lưu cấu hình hệ thống', 'success'));
}

// ==================== NHẬT KÝ KIỂM TOÁN ====================
function renderAuditLog() {
    const container = document.getElementById('appContent');
    const logs = currentRole === 'admin' ? fullData.auditLogs : managerData.auditLogs;
    const totalPages = Math.ceil(logs.length / pageSize);
    const paginated = logs.slice((currentAuditPage - 1) * pageSize, currentAuditPage * pageSize);

    container.innerHTML = `
        <div class="header-bar"><div><h1>Nhật ký kiểm toán</h1><p class="text-small">Lịch sử thay đổi dữ liệu</p></div><button id="exportAuditBtn" class="btn-default text-sm"><i class="fas fa-download"></i> Xuất Excel</button></div>
        <div class="p-6"><div class="bg-white rounded-lg shadow-sm p-5">
            <div class="filter-bar">
                <div class="filter-item"><label>Từ ngày</label><input type="date" id="filterFrom"></div>
                <div class="filter-item"><label>Đến ngày</label><input type="date" id="filterTo"></div>
                <div class="filter-item"><label>Hành động</label><select id="filterAction"><option value="">Tất cả</option><option>CREATE</option><option>UPDATE</option><option>DELETE</option></select></div>
                <div class="filter-item"><label>Người thực hiện</label><input type="text" id="filterActor" placeholder="Email"></div>
                <div><button id="applyFilterBtn" class="btn-primary">Lọc</button></div>
            </div>
            <div class="overflow-x-auto"><table class="data-grid w-full"><thead><tr><th>Thời gian</th><th>Người thực hiện</th><th>Hành động</th><th>Đối tượng</th><th>Chi tiết thay đổi</th></tr></thead><tbody id="auditTableBody"></tbody></table></div>
            <div class="pagination" id="auditPagination"></div>
        </div></div>
    `;

    renderAuditTable(paginated);
    renderAuditPagination(totalPages);

    document.getElementById('exportAuditBtn')?.addEventListener('click', () => showToast('Xuất báo cáo Excel (tối đa 10.000 dòng)', 'info'));
    document.getElementById('applyFilterBtn')?.addEventListener('click', () => { currentAuditPage = 1; renderAuditLog(); showToast('Đã áp dụng bộ lọc', 'success'); });
}

function renderAuditTable(logs) {
    const tbody = document.getElementById('auditTableBody');
    if (!tbody) return;
    tbody.innerHTML = logs.map(log => `
        <tr class="${log.corrupted ? 'audit-row-corrupted' : ''}">
            <td>${log.timestamp}</td><td>${log.actor}</td><td><span class="badge-info">${log.action}</span></td><td>${log.entity}</td>
            <td><button class="text-[#1677FF] text-sm view-detail" data-old='${log.oldValue}' data-new='${log.newValue}'>Xem chi tiết</button></td>
        </tr>
    `).join('');

    document.querySelectorAll('.view-detail').forEach(btn => {
        btn.addEventListener('click', () => {
            alert(`Giá trị cũ: ${btn.dataset.old}\nGiá trị mới: ${btn.dataset.new}`);
        });
    });
}

function renderAuditPagination(totalPages) {
    const paginationDiv = document.getElementById('auditPagination');
    if (!paginationDiv) return;
    let html = `<button ${currentAuditPage === 1 ? 'disabled' : ''} id="prevPage">«</button>`;
    for (let i = 1; i <= totalPages; i++) html += `<button class="${i === currentAuditPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    html += `<button ${currentAuditPage === totalPages ? 'disabled' : ''} id="nextPage">»</button>`;
    paginationDiv.innerHTML = html;

    document.querySelectorAll('[data-page]').forEach(btn => {
        btn.addEventListener('click', (e) => { currentAuditPage = parseInt(e.target.dataset.page); renderAuditLog(); });
    });
    document.getElementById('prevPage')?.addEventListener('click', () => { if (currentAuditPage > 1) { currentAuditPage--; renderAuditLog(); } });
    document.getElementById('nextPage')?.addEventListener('click', () => { if (currentAuditPage < totalPages) { currentAuditPage++; renderAuditLog(); } });
}

// ==================== TẠO ĐƠN NGHỈ (MODAL) ====================
function updateCalculatedDays() {
    const start = document.getElementById('startDate').value;
    const end = document.getElementById('endDate').value;
    if (start && end) {
        const days = calculateBusinessDays(start, end);
        document.getElementById('calculatedDays').innerText = days;
    }
}

function submitLeaveRequest() {
    const start = document.getElementById('startDate').value;
    const end = document.getElementById('endDate').value;
    const days = parseInt(document.getElementById('calculatedDays').innerText);

    if (!start || !end) { alert('Vui lòng chọn ngày'); return; }
    if (days <= 0) { alert('Số ngày nghỉ không hợp lệ'); return; }
    if (days > currentLeaveRemainingDays) { alert('Quỹ phép không đủ'); return; }

    currentLeaveRemainingDays -= days;
    showToast('Đơn đã được gửi, chờ phê duyệt', 'success');
    document.getElementById('createLeaveModal').classList.add('hidden');

    if (currentView === 'employee') renderProfile();
    if (currentView === 'timeoff') renderTimeOff();
}

// ==================== PHÊ DUYỆT OTP ====================
function openApproveModal(leaveId, info) {
    currentApprovalLeaveId = leaveId;
    document.getElementById('modalLeaveInfo').innerHTML = `<strong>${info}</strong>`;
    document.getElementById('otpInput').value = '';
    document.getElementById('otpInput').disabled = false;
    document.getElementById('resendOtpBtn').classList.add('hidden');
    otpAttempts = 0;
    startOtpTimer(30);
    document.getElementById('approveModal').classList.remove('hidden');
    document.getElementById('approveModal').classList.add('flex');
}

let timerSeconds = 30;
function startOtpTimer(seconds) {
    if (otpTimerInterval) clearInterval(otpTimerInterval);
    timerSeconds = seconds;
    const timerDisplay = document.getElementById('timerDisplay');
    const resendBtn = document.getElementById('resendOtpBtn');
    if (timerDisplay) timerDisplay.innerText = `${timerSeconds}s`;
    otpTimerInterval = setInterval(() => {
        timerSeconds--;
        if (timerSeconds <= 0) {
            clearInterval(otpTimerInterval);
            if (timerDisplay) timerDisplay.innerText = '0s';
            if (resendBtn) resendBtn.classList.remove('hidden');
            const otpField = document.getElementById('otpInput');
            if (otpField) otpField.disabled = true;
        } else {
            if (timerDisplay) timerDisplay.innerText = `${timerSeconds}s`;
        }
    }, 1000);
}

function approveLeave() {
    const otp = document.getElementById('otpInput').value;
    if (otp === '123456') {
        showToast(`Phê duyệt thành công đơn #${currentApprovalLeaveId}`, 'success');
        document.getElementById('approveModal').classList.add('hidden');
        if (otpTimerInterval) clearInterval(otpTimerInterval);
        if (currentView === 'dashboard') renderDashboard();
        if (currentView === 'timeoff') renderTimeOff();
    } else {
        otpAttempts++;
        if (otpAttempts >= 3) {
            showToast('Sai OTP quá 3 lần, phiên làm việc bị khóa', 'error');
            document.getElementById('approveModal').classList.add('hidden');
        } else {
            showToast(`Mã OTP không đúng! Còn ${3 - otpAttempts} lần thử`, 'error');
        }
    }
}


// ==================== MODAL TIMESHEET ====================
function handleTimesheetSubmit() {
    const hours = parseFloat(document.getElementById('timesheetHours')?.value || 0);
    if (hours <= 0 || hours > 12) { alert('Số giờ phải từ 0.5 đến 12'); return; }
    const newTotal = weeklyTotalHours + hours;
    if (newTotal > weeklyLimit) { alert(`Tổng giờ tuần vượt quá ${weeklyLimit}h`); return; }
    weeklyTotalHours = newTotal;
    showToast('Đã thêm giờ làm việc', 'success');
    document.getElementById('addTimesheetModal').classList.add('hidden');
    if (currentView === 'timesheets') renderTimesheets();
    if (currentView === 'employee') renderProfile();
}

// ==================== MODAL APPRAISAL ====================
function handleAppraisalSubmit() {
    showToast('Đã gửi yêu cầu đánh giá', 'success');
    document.getElementById('addAppraisalModal').classList.add('hidden');
}

// ==================== MODAL SWAP SHIFT ====================
function handleSwapSubmit() {
    showToast('Đã gửi yêu cầu đổi ca', 'success');
    document.getElementById('swapShiftModal').classList.add('hidden');
}

function renderHolidays() {
    // Lấy danh sách ngày lễ từ biến holidays (đã có sẵn trong code)
    // Chuyển đổi mảng holidays thành danh sách object
    const holidayNames = {
        '2026-01-01': 'Tết Dương lịch',
        '2026-04-30': 'Giải phóng miền Nam',
        '2026-05-01': 'Quốc tế Lao động',
        '2026-09-02': 'Quốc khánh',
        '2026-12-25': 'Giáng sinh'
    };
    
    const holidaysList = holidays.map(date => ({
        date: date,
        name: holidayNames[date] || 'Ngày lễ'
    }));
    
    const container = document.getElementById('appContent');
    container.innerHTML = `
        <div class="header-bar">
            <div><h1>Quản lý ngày lễ</h1><p class="text-small">Danh sách ngày nghỉ lễ trong năm</p></div>
            <button id="addHolidayBtn" class="btn-primary text-sm"><i class="fas fa-plus"></i> Thêm ngày lễ</button>
        </div>
        <div class="p-6">
            <div class="bg-white rounded-lg shadow-sm p-5">
                ${holidaysList.length === 0 ? '<div class="text-center py-8 text-gray-400">Chưa có ngày lễ nào</div>' : `
                <table class="data-grid w-full">
                    <thead><tr><th>Ngày</th><th>Tên ngày lễ</th><th>Thao tác</th></tr></thead>
                    <tbody>
                        ${holidaysList.map(h => `
                            <tr data-date="${h.date}">
                                <td>${h.date}</td>
                                <td>${h.name}</td>
                                <td><button class="text-red-500 text-sm delete-holiday-btn" data-date="${h.date}">Xóa</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                `}
            </div>
        </div>
    `;
    
    // Xử lý thêm ngày lễ
    document.getElementById('addHolidayBtn')?.addEventListener('click', () => {
        const name = prompt('Nhập tên ngày lễ:');
        const date = prompt('Nhập ngày (YYYY-MM-DD):');
        if (name && date) {
            if (!holidays.includes(date)) {
                holidays.push(date);
                showToast(`Đã thêm ngày lễ ${name} vào ${date}`, 'success');
                renderHolidays(); // Refresh lại danh sách
            } else {
                showToast(`Ngày ${date} đã tồn tại trong danh sách`, 'error');
            }
        }
    });
    
    // Xử lý xóa ngày lễ
    document.querySelectorAll('.delete-holiday-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const date = btn.dataset.date;
            const index = holidays.indexOf(date);
            if (index > -1) {
                holidays.splice(index, 1);
                showToast(`Đã xóa ngày lễ ${date}`, 'success');
                renderHolidays(); // Refresh lại danh sách
            }
        });
    });
}

// ==================== MODAL REPORT EQUIPMENT ====================
function handleEquipReportSubmit() {
    const issue = document.getElementById('equipmentIssue')?.value;
    if (!issue) { alert('Vui lòng nhập mô tả sự cố'); return; }
    showToast('Đã gửi yêu cầu báo hỏng thiết bị', 'success');
    document.getElementById('reportEquipmentModal').classList.add('hidden');
}
function renderOrgChart() {
    const container = document.getElementById('appContent');
    const orgData = {
        name: 'Hội đồng quản trị',
        children: [
            {
                name: 'Phòng Kỹ thuật', manager: 'Nguyễn Văn An', employees: 45, children: [
                    { name: 'Tổ Develop', manager: 'Trần Văn Nam', employees: 20 },
                    { name: 'Tổ QA/QC', manager: 'Lê Thị Hương', employees: 15 }
                ]
            },
            { name: 'Phòng Kinh doanh', manager: 'Phạm Hoàng Minh', employees: 38 },
            { name: 'Phòng Nhân sự', manager: 'Đỗ Thị Mai', employees: 12 }
        ]
    };

    function renderTree(node, level = 0) {
        const indent = level * 24;
        let html = `<div style="margin-left: ${indent}px; padding: 8px 0; border-left: 2px solid #1677FF; padding-left: 12px;" class="hover:bg-gray-50">
            <div class="flex items-center gap-3">
                <i class="fas fa-building text-[#1677FF]"></i>
                <span class="font-medium">${node.name}</span>
                ${node.manager ? `<span class="text-small text-gray-500">(Trưởng phòng: ${node.manager})</span>` : ''}
                <span class="badge-info text-xs">${node.employees || 0} NV</span>
            </div>`;
        if (node.children) {
            html += `<div class="mt-1">${node.children.map(c => renderTree(c, level + 1)).join('')}</div>`;
        }
        html += `</div>`;
        return html;
    }

    container.innerHTML = `
        <div class="header-bar"><div><h1>Sơ đồ tổ chức</h1><p class="text-small">Cơ cấu phòng ban & quản lý</p></div>
        <button id="exportOrgChartBtn" class="btn-default text-sm"><i class="fas fa-download"></i> Xuất PNG</button></div>
        <div class="p-6"><div class="bg-white rounded-lg shadow-sm p-6">${renderTree(orgData)}</div></div>
    `;
    document.getElementById('exportOrgChartBtn')?.addEventListener('click', () => showToast('Đã xuất sơ đồ tổ chức (PNG)', 'success'));
}
// ==================== ĐIỀU HƯỚNG CHÍNH ====================
function navigateTo(view) {
    currentView = view;
    const views = {
    dashboard: renderDashboard,
    employee: renderProfile,
    contracts: renderContracts,
    equipment: renderEquipment,
    cars: renderCars,
    planning: renderPlanning,
    appraisal: renderAppraisal,
    timesheets: renderTimesheets,
    timeoff: renderTimeOff,
    courses: renderCourses,
    documents: renderDocuments,
    audit: renderAuditLog,
    orgchart: renderOrgChart,
    config: renderConfig,
    holidays: renderHolidays  
};

    if (views[view]) {
        views[view]();
    } else {
        document.getElementById('appContent').innerHTML = `<div class="p-6"><div class="bg-white p-10 text-center text-gray-400">Chức năng đang phát triển</div></div>`;
    }

    document.querySelectorAll('.nav-item[data-view]').forEach(item => {
        if (item.dataset.view === view) item.classList.add('active');
        else item.classList.remove('active');
    });
}

// ==================== KHỞI TẠO SỰ KIỆN ====================
document.querySelectorAll('.nav-item[data-view]').forEach(link => {
    link.addEventListener('click', (e) => { e.preventDefault(); navigateTo(link.dataset.view); });
});

// Modal tạo đơn
document.getElementById('closeCreateModalBtn')?.addEventListener('click', () => document.getElementById('createLeaveModal')?.classList.add('hidden'));
document.getElementById('cancelLeaveBtn')?.addEventListener('click', () => document.getElementById('createLeaveModal')?.classList.add('hidden'));
document.getElementById('submitLeaveBtn')?.addEventListener('click', submitLeaveRequest);
document.getElementById('startDate')?.addEventListener('change', updateCalculatedDays);
document.getElementById('endDate')?.addEventListener('change', updateCalculatedDays);
document.getElementById('leaveReason')?.addEventListener('input', function () {
    const counter = document.getElementById('reasonCounter');
    if (counter) counter.innerText = this.value.length;
});

// Modal phê duyệt OTP
document.getElementById('closeModalBtn')?.addEventListener('click', () => document.getElementById('approveModal')?.classList.add('hidden'));
document.getElementById('modalRejectBtn')?.addEventListener('click', rejectLeave);
document.getElementById('modalApproveBtn')?.addEventListener('click', approveLeave);
document.getElementById('resendOtpBtn')?.addEventListener('click', () => {
    startOtpTimer(30);
    const otpField = document.getElementById('otpInput');
    if (otpField) { otpField.disabled = false; otpField.value = ''; }
    showToast('Đã gửi lại mã OTP (demo)', 'info');
});

// Modal từ chối
const rejectReasonModal = document.getElementById('rejectReasonModal');
if (rejectReasonModal) {
    document.getElementById('closeRejectModalBtn')?.addEventListener('click', () => rejectReasonModal.classList.add('hidden'));
    document.getElementById('cancelRejectBtn')?.addEventListener('click', () => rejectReasonModal.classList.add('hidden'));
    document.getElementById('confirmRejectBtn')?.addEventListener('click', () => {
        const reason = document.getElementById('rejectReason').value;
        if (!reason.trim()) { alert('Vui lòng nhập lý do từ chối'); return; }
        showToast(`Đã từ chối đơn #${currentApprovalLeaveId} với lý do: ${reason}`, 'info');
        rejectReasonModal.classList.add('hidden');
        if (currentView === 'dashboard') renderDashboard();
        if (currentView === 'timeoff') renderTimeOff();
    });
}

// Modal ký số
const signModal = document.getElementById('signDocumentModal');
if (signModal) {
    signModal.addEventListener('click', (e) => { if (e.target === signModal) signModal.classList.add('hidden'); });
    document.getElementById('closeSignModalBtn')?.addEventListener('click', () => signModal.classList.add('hidden'));
    document.getElementById('cancelSignBtn')?.addEventListener('click', () => signModal.classList.add('hidden'));
}

// Modal Timesheet
document.getElementById('closeTimesheetModalBtn')?.addEventListener('click', () => document.getElementById('addTimesheetModal')?.classList.add('hidden'));
document.getElementById('cancelTimesheetBtn')?.addEventListener('click', () => document.getElementById('addTimesheetModal')?.classList.add('hidden'));
document.getElementById('submitTimesheetBtn')?.addEventListener('click', handleTimesheetSubmit);

// Modal Appraisal
document.getElementById('closeAppraisalModalBtn')?.addEventListener('click', () => document.getElementById('addAppraisalModal')?.classList.add('hidden'));
document.getElementById('cancelAppraisalBtn')?.addEventListener('click', () => document.getElementById('addAppraisalModal')?.classList.add('hidden'));
document.getElementById('submitAppraisalBtn')?.addEventListener('click', handleAppraisalSubmit);

// Modal Swap Shift
document.getElementById('closeSwapModalBtn')?.addEventListener('click', () => document.getElementById('swapShiftModal')?.classList.add('hidden'));
document.getElementById('cancelSwapBtn')?.addEventListener('click', () => document.getElementById('swapShiftModal')?.classList.add('hidden'));
document.getElementById('submitSwapBtn')?.addEventListener('click', handleSwapSubmit);

// Modal Report Equipment
document.getElementById('closeEquipModalBtn')?.addEventListener('click', () => document.getElementById('reportEquipmentModal')?.classList.add('hidden'));
document.getElementById('cancelEquipReportBtn')?.addEventListener('click', () => document.getElementById('reportEquipmentModal')?.classList.add('hidden'));
document.getElementById('submitEquipReportBtn')?.addEventListener('click', handleEquipReportSubmit);

// Khởi chạy
navigateTo('dashboard');